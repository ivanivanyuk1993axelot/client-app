import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MainMenu} from './main-menu';
import {ApiService} from '../api/api.service';
import {mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public mainMenuListBS$ = new BehaviorSubject<Array<MainMenu>>([]);

  constructor(
    private _apiService: ApiService,
  ) {
  }

  public loadMainMenuList$(): Observable<Array<MainMenu>> {
    return this._apiService.getItemByCode$('GlobalConfiguration', 'menu-type').pipe(
      mergeMap((menuTypeConfiguration: any) => {
        return this._apiService.getItemByCode$('MainMenu', menuTypeConfiguration.value).pipe(
          tap(mainMenuList => {
            this.mainMenuListBS$.next(mainMenuList ? mainMenuList.items : []);
          })
        );
      }),
    );
  }
}
