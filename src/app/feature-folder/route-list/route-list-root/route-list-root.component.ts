import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {MainMenu} from '../../../service-folder/menu/main-menu';
import {BehaviorSubject, Subject} from 'rxjs';
import {MainMenuExtended} from './main-menu-extended';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, startWith, takeUntil} from 'rxjs/operators';
import {BroadcastComponentDestroyed} from '../../../mixin-folder/broadcast-component-destroyed';
import {applyMixins} from 'rxjs/internal-compatibility';
import {FormControl} from '@angular/forms';
import {escapeRegExp} from 'tslint/lib/utils';
import {MatOptionSelectionChange} from '@angular/material';

@Component({
  selector: 'app-route-list-root',
  templateUrl: './route-list-root.component.html',
  styleUrls: ['./route-list-root.component.scss']
})
export class RouteListRootComponent implements BroadcastComponentDestroyed, OnChanges, OnDestroy {
  @Input() routeList: Array<MainMenu>;

  public routeListExtendedBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);
  public routeListExtendedFlatBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);
  public searchStringC = new FormControl('');

  _isComponentDestroyedS$ = new Subject<void>();

  private _changeS$ = new Subject<void>();
  private _currentUrlBS$: BehaviorSubject<string>;
  private _searchRegExpBS$: BehaviorSubject<RegExp>;

  constructor(
    private _router: Router,
  ) {
    this._currentUrlBS$ = new BehaviorSubject<string>(_router.url);
    _router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(() => {
      this._currentUrlBS$.next(_router.url);
    });

    this._searchRegExpBS$ = new BehaviorSubject<RegExp>((new RegExp(this.searchStringC.value)));
    this.searchStringC.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(searchString => {
      this._searchRegExpBS$.next(
        new RegExp(escapeRegExp(searchString), 'i'),
      );
    });

    this.routeListExtendedBS$.pipe(
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(routeListExtended => {
      this.routeListExtendedFlatBS$.next(
        this._computeRouteListFlat(routeListExtended),
      );
    });
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
    this._extendRouteWithMatchesSearchRegExp(route, parentRoute);
    this._extendRouteWithMatchesUrl(route, parentRoute);

    if (route.items) {
      this._extendRouteWithHasChildrenThatMatchSearchRegExp(route, parentRoute);
      this._extendRouteWithHasChildrenThatMatchUrl(route, parentRoute);

      for (const childRoute of route.items) {
        this._extendRoute(childRoute, route);
      }
    }
  }

  private _extendRouteWithHasChildrenThatMatchSearchRegExp(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.hasChildrenThatMatchSearchRegExpBS$ = new BehaviorSubject<boolean>(true);
    route.countOfChildrenThatMatchSearchRegExpBS$ = new BehaviorSubject<number>(0);
    route.countOfChildrenThatMatchSearchRegExpBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(countOfChildrenThatMatchSearchRegExp => {
      route.hasChildrenThatMatchSearchRegExpBS$.next(countOfChildrenThatMatchSearchRegExp > 0);
    });

    if (parentRoute) {
      route.hasChildrenThatMatchSearchRegExpBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(hasChildrenThatMatchSearchRegExp => {
        const countOfChildrenThatMatchSearchRegExp = parentRoute.countOfChildrenThatMatchSearchRegExpBS$.getValue();
        parentRoute.countOfChildrenThatMatchSearchRegExpBS$.next(
          hasChildrenThatMatchSearchRegExp ? countOfChildrenThatMatchSearchRegExp + 1 : countOfChildrenThatMatchSearchRegExp - 1,
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

  private _extendRouteWithMatchesSearchRegExp(
    route: MainMenuExtended,
    parentRoute?: MainMenuExtended,
  ) {
    route.matchesSearchRegExpBS$ = new BehaviorSubject<boolean>(this._searchRegExpBS$.getValue().test(route.text));
    this._searchRegExpBS$.pipe(
      takeUntil(this._changeS$),
    ).subscribe(searchRegExp => {
      route.matchesSearchRegExpBS$.next(
        searchRegExp.test(route.text) && (this.searchStringC.value === '' || this._hasRouteUrl(route))
      );
    });

    if (parentRoute) {
      route.matchesSearchRegExpBS$.pipe(
        startWith(true),
        distinctUntilChanged(),
        takeUntil(this._changeS$),
      ).subscribe(matchesSearchRegExp => {
        const countOfChildrenThatMatchSearchRegExp = parentRoute.countOfChildrenThatMatchSearchRegExpBS$.getValue();
        parentRoute.countOfChildrenThatMatchSearchRegExpBS$.next(
          matchesSearchRegExp ? countOfChildrenThatMatchSearchRegExp + 1 : countOfChildrenThatMatchSearchRegExp - 1,
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
}

applyMixins(RouteListRootComponent, [
  BroadcastComponentDestroyed,
]);
