import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {MainMenu} from '../../../service-folder/menu/main-menu';
import {BehaviorSubject, combineLatest, interval, Subject} from 'rxjs';
import {MainMenuExtended} from './main-menu-extended';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, startWith, takeUntil} from 'rxjs/operators';
import {BroadcastComponentDestroyed} from '../../../mixin-folder/broadcast-component-destroyed';
import {applyMixins} from 'rxjs/internal-compatibility';
import {FormControl} from '@angular/forms';
import {MatOptionSelectionChange} from '@angular/material';
import {computeLevenshteinDistanceAmortized} from '../../../method-folder/compute-levenshtein-distance/compute-levenshtein-distance-amortized';

@Component({
  selector: 'app-route-list-root',
  templateUrl: './route-list-root.component.html',
  styleUrls: ['./route-list-root.component.scss']
})
export class RouteListRootComponent implements BroadcastComponentDestroyed, OnChanges, OnDestroy {
  @Input() routeList: Array<MainMenu>;

  public isSearchInProgressBS$: BehaviorSubject<boolean>;
  public routeListExtendedBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);
  public routeListExtendedFlatSortedBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);
  public searchStringC = new FormControl('');

  _isComponentDestroyedS$ = new Subject<void>();

  private _changeS$ = new Subject<void>();
  private _currentUrlBS$: BehaviorSubject<string>;
  private _isLevenshteinComputing: BehaviorSubject<boolean>;
  private _levenshteingComputingInProgressCountBS$ = new BehaviorSubject<number>(0);
  private _levenshteinMismatchThreshold = 2;
  private _routeListExtendedFlatBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);
  private _searchStringLowerCasedBS$: BehaviorSubject<string>;

  constructor(
    private _router: Router,
  ) {
    this._subscribeToRouterEvents();
    this._subscribeToSearchString();
    this._subscribeToRouteListExtended();

    interval(1000).subscribe(() => {
      const routeListSorted = Object.assign([], this._routeListExtendedFlatBS$.getValue());
      routeListSorted.sort((left, right) => {
        const leftDistance = left.levenshteinDistanceToSearchStringAmortizedBS$.getValue();
        const rightDistance = right.levenshteinDistanceToSearchStringAmortizedBS$.getValue();
        if (leftDistance < rightDistance) {
          return -1;
        }
        if (leftDistance > rightDistance) {
          return 1;
        }
        return 0;
      });

      this.routeListExtendedFlatSortedBS$.next(routeListSorted);
    });
    // combineLatest(
    //   this._routeListExtendedFlatBS$,
    //   this.searchStringC.valueChanges,
    // ).pipe(
    //   takeUntil(this._isComponentDestroyedS$),
    // ).subscribe(([routeListExtendedFlat, searchString]) => {
    //   const routeListSorted = Object.assign([], routeListExtendedFlat);
    //   routeListSorted.sort((left, right) => {
    //     const leftDistance = left.levenshteinDistanceToSearchStringAmortizedBS$.getValue();
    //     const rightDistance = right.levenshteinDistanceToSearchStringAmortizedBS$.getValue();
    //     if (leftDistance < rightDistance) {
    //       return -1;
    //     }
    //     if (leftDistance > rightDistance) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    //
    //   this.routeListExtendedFlatSortedBS$.next(routeListSorted);
    // });
  }

  public ngOnChanges(): void {
    this._changeS$.next();

    this.routeListExtendedBS$.next(
      this._computeRouteListExtended(this.routeList),
    );
  }

  public ngOnDestroy(): void {
    this._changeS$.next();
    this._changeS$.complete();

    this._broadcastComponentDestroyed();
  }

  public selectOption(
    event: MatOptionSelectionChange,
    route: MainMenuExtended,
  ): void {
    if (event.source.selected) {
      this._router.navigateByUrl(route.action).then(() => {
        this.searchStringC.setValue('');
      });
    }
  }

  _broadcastComponentDestroyed(): void {
  }

  private _appendRouteToFlatList(
    route: MainMenuExtended,
    routeListFlat: Array<MainMenuExtended>,
  ) {
    if (this._hasRouteUrl(route)) {
      routeListFlat.push(route);
    }

    if (route.items) {
      for (const childRoute of route.items) {
        this._appendRouteToFlatList(childRoute, routeListFlat);
      }
    }
  }

  private _computeRouteListExtended(
    routeList: Array<MainMenu>,
  ): Array<MainMenuExtended> {
    const routListExtended = Object.assign([], routeList) as Array<MainMenuExtended>;

    for (const route of routListExtended) {
      this._extendRoute(route);
    }

    return routListExtended;
  }

  private _computeRouteListFlat(
    routeList: Array<MainMenuExtended>,
  ): Array<MainMenuExtended> {
    const routeListFlat = [];

    for (const route of routeList) {
      this._appendRouteToFlatList(route, routeListFlat);
    }

    routeListFlat.sort((left, right) => {
      if (left.text < right.text) {
        return -1;
      }
      if (left.text > right.text) {
        return 1;
      }
      return 0;
    });

    return routeListFlat;
  }

  private _extendRoute(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.textLowerCased = route.text.toLowerCase();

    this._extendRouteWithMatchesSearch(route, parentRoute);
    this._extendRouteWithMatchesUrl(route, parentRoute);

    if (route.items) {
      this._extendRouteWithHasChildrenThatMatchSearch(route, parentRoute);
      this._extendRouteWithHasChildrenThatMatchUrl(route, parentRoute);

      for (const childRoute of route.items) {
        this._extendRoute(childRoute, route);
      }
    }
  }

  private _extendRouteWithHasChildrenThatMatchSearch(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.hasChildrenThatMatchSearchBS$ = new BehaviorSubject<boolean>(true);
    route.countOfChildrenThatMatchSearchBS$ = new BehaviorSubject<number>(0);
    route.countOfChildrenThatMatchSearchBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(countOfChildrenThatMatchSearch => {
      route.hasChildrenThatMatchSearchBS$.next(countOfChildrenThatMatchSearch > 0);
    });

    if (parentRoute) {
      route.hasChildrenThatMatchSearchBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(hasChildrenThatMatchSearch => {
        const countOfChildrenThatMatchSearch = parentRoute.countOfChildrenThatMatchSearchBS$.getValue();
        parentRoute.countOfChildrenThatMatchSearchBS$.next(
          hasChildrenThatMatchSearch ? countOfChildrenThatMatchSearch + 1 : countOfChildrenThatMatchSearch - 1,
        );
      });
    }
  }

  private _extendRouteWithHasChildrenThatMatchUrl(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.hasChildrenThatMatchUrlBS$ = new BehaviorSubject<boolean>(true);
    route.countOfChildrenThatMatchUrlBS$ = new BehaviorSubject<number>(0);
    route.countOfChildrenThatMatchUrlBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(countOfChildrenThatMatchUrl => {
      route.hasChildrenThatMatchUrlBS$.next(countOfChildrenThatMatchUrl > 0);
    });

    if (parentRoute) {
      route.hasChildrenThatMatchUrlBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(hasChildrenThatMatchUrl => {
        const countOfChildrenThatMatchUrl = parentRoute.countOfChildrenThatMatchUrlBS$.getValue();
        parentRoute.countOfChildrenThatMatchUrlBS$.next(
          hasChildrenThatMatchUrl ? countOfChildrenThatMatchUrl + 1 : countOfChildrenThatMatchUrl - 1,
        );
      });
    }
  }

  private _extendRouteWithMatchesSearch(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.levenshteinDistanceToSearchStringAmortizedBS$ = new BehaviorSubject(
      computeLevenshteinDistanceAmortized(route.textLowerCased, this._searchStringLowerCasedBS$.getValue()),
    );
    this._searchStringLowerCasedBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(searchString => {
      route.levenshteinDistanceToSearchStringAmortizedBS$.next(
        computeLevenshteinDistanceAmortized(route.textLowerCased, searchString)
      );
    });

    route.matchesSearchBS$ = new BehaviorSubject<boolean>(
      (this._hasRouteUrl(route) || !this.isSearchInProgressBS$.getValue())
      &&
      route.levenshteinDistanceToSearchStringAmortizedBS$.getValue() < this._levenshteinMismatchThreshold
    );
    combineLatest(
      this.isSearchInProgressBS$.pipe(
        distinctUntilChanged(),
      ),
      route.levenshteinDistanceToSearchStringAmortizedBS$,
    ).pipe(
      takeUntil(this._changeS$),
    ).subscribe(([isSearchInProgress, levenshteinDistanceToSearchStringAmortized]) => {
      route.matchesSearchBS$.next(
        (this._hasRouteUrl(route) || !isSearchInProgress)
        &&
        levenshteinDistanceToSearchStringAmortized < this._levenshteinMismatchThreshold
      );
    });

    if (parentRoute) {
      route.matchesSearchBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(matchesSearchRegExp => {
        const countOfChildrenThatMatchSearch = parentRoute.countOfChildrenThatMatchSearchBS$.getValue();
        parentRoute.countOfChildrenThatMatchSearchBS$.next(
          matchesSearchRegExp ? countOfChildrenThatMatchSearch + 1 : countOfChildrenThatMatchSearch - 1,
        );
      });
    }
  }

  private _extendRouteWithMatchesUrl(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.matchesUrlBS$ = new BehaviorSubject<boolean>(route.action === this._currentUrlBS$.getValue());
    this._currentUrlBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(url => {
      route.matchesUrlBS$.next(route.action === url);
    });

    if (parentRoute) {
      route.matchesUrlBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(matchesUrl => {
        const countOfChildrenThatMatchUrl = parentRoute.countOfChildrenThatMatchUrlBS$.getValue();
        parentRoute.countOfChildrenThatMatchUrlBS$.next(
          matchesUrl ? countOfChildrenThatMatchUrl + 1 : countOfChildrenThatMatchUrl - 1,
        );
      });
    }
  }

  private _hasRouteUrl(
    route: MainMenuExtended,
  ) {
    return route.action !== '#';
  }

  private _subscribeToRouterEvents() {
    this._currentUrlBS$ = new BehaviorSubject<string>(this._router.url);
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(() => {
      this._currentUrlBS$.next(this._router.url);
    });
  }

  private _subscribeToRouteListExtended() {
    this.routeListExtendedBS$.pipe(
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(routeListExtended => {
      this._routeListExtendedFlatBS$.next(
        this._computeRouteListFlat(routeListExtended),
      );
    });
  }

  private _subscribeToSearchString() {
    this.isSearchInProgressBS$ = new BehaviorSubject<boolean>(this.searchStringC.value !== '');
    this.searchStringC.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(searchString => {
      this.isSearchInProgressBS$.next(searchString !== '');
      this._searchStringLowerCasedBS$.next(searchString.toLowerCase());
    });
  }
}

applyMixins(RouteListRootComponent, [
  BroadcastComponentDestroyed,
]);
