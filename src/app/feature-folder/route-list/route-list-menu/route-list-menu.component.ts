import {Component, Input} from '@angular/core';
import {MainMenuExtended} from '../route-list-root/main-menu-extended';

@Component({
  selector: 'app-route-list-menu',
  templateUrl: './route-list-menu.component.html',
  styleUrls: ['./route-list-menu.component.scss']
})
export class RouteListMenuComponent {
  @Input() routeList: Array<MainMenuExtended>;
}
