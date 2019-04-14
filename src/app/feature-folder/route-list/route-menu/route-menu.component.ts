import {Component, Input} from '@angular/core';
import {MainMenuExtended} from '../route-list-root/main-menu-extended';

@Component({
  selector: 'app-route-menu',
  templateUrl: './route-menu.component.html',
  styleUrls: ['./route-menu.component.scss']
})
export class RouteMenuComponent {
  @Input() route: MainMenuExtended;
}
