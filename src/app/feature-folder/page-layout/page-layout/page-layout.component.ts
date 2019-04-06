import {Component} from '@angular/core';
import {MenuService} from '../../../service-folder/menu/menu.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {
  public appTitle = environment.appTitle;

  constructor(
    public menuService: MenuService,
  ) {
    menuService.loadMainMenuList$().subscribe();
  }
}
