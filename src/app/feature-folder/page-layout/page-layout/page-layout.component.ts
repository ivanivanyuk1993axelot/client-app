import {Component} from '@angular/core';
import {MenuService} from '../../../service-folder/menu/menu.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent {
  constructor(
    public menuService: MenuService,
  ) {
    menuService.loadMainMenuList$().subscribe();
  }

}
