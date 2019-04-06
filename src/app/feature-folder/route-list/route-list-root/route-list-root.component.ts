import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {MainMenu} from '../../../service-folder/menu/main-menu';
import {BehaviorSubject, Subject} from 'rxjs';
import {MainMenuExtended} from './main-menu-extended';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, startWith, takeUntil} from 'rxjs/operators';
import {BroadcastComponentDestroyed} from '../../../mixin-folder/broadcast-component-destroyed';
import {applyMixins} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-route-list-root',
  templateUrl: './route-list-root.component.html',
  styleUrls: ['./route-list-root.component.scss']
})
export class RouteListRootComponent implements BroadcastComponentDestroyed, OnChanges, OnDestroy {
  @Input() routeList: Array<MainMenu>;

  public routeListExtendedBS$ = new BehaviorSubject<Array<MainMenuExtended>>([]);

  _isComponentDestroyedS$ = new Subject<void>();

  private _currentUrlBS$: BehaviorSubject<string>;
  private _changeS$ = new Subject<void>();

  constructor(
    private _router: Router,
  ) {
    this._currentUrlBS$ = new BehaviorSubject<string>(_router.url);
    _router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      takeUntil(this._isComponentDestroyedS$),
    ).subscribe(() => {
      this._currentUrlBS$.next(_router.url);
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
  }

  _broadcastComponentDestroyed(): void {
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

  private _extendRoute(
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

    if (route.items) {
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

      for (const childRoute of route.items) {
        this._extendRoute(childRoute, route);
      }
    }
  }
}

applyMixins(RouteListRootComponent, [
  BroadcastComponentDestroyed,
]);
