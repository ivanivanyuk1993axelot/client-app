import {Component} from '@angular/core';
import {ApiService} from '../../../service-folder/api/api.service';
import {forkJoin} from 'rxjs';
import {mainMenu} from './migration-folder/main-menu';
import {MenuService} from '../../../service-folder/menu/menu.service';
import {NotificationService} from '../../../service-folder/notification/notification/notification.service';

declare var require: any;
const dicts = require('./migration-folder/DictionaryEditor.json');
const edits = require('./migration-folder/MainFrame.json');

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent {
  private _classNameList = [
    'DictionaryEditor',
    'MainFrame',
    'MainMenu',
  ];

  constructor(
    private _apiService: ApiService,
    private _menuService: MenuService,
    public notificationService: NotificationService,
  ) {
  }

  public flush() {
    for (const className of this._classNameList) {
      this._apiService.findItems$(className).subscribe(listResponse => {
        forkJoin(listResponse.list.map(item => this._apiService.deleteItem$(className, item.uuid))).subscribe(() => {
          this._menuService.loadMainMenuList$().subscribe(() => {
            console.log(`Deleted ${listResponse.total} ${className}`);
          });
        });
      });
    }
  }

  public migrate() {
    forkJoin(dicts.list.map(item => this._apiService.createItem$('DictionaryEditor', item))).subscribe(() => {
      console.log('Created DictionaryEditor');
    });

    forkJoin(edits.list.map(item => this._apiService.createItem$('MainFrame', item))).subscribe(() => {
      console.log('Created MainFrame');
    });

    forkJoin(mainMenu.list.map(item => this._apiService.createItem$('MainMenu', item))).subscribe(() => {
      this._menuService.loadMainMenuList$().subscribe(() => {
        console.log('Created MainMenu');
      });
    });
  }

}
