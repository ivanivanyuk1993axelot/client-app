import {Component, Input} from '@angular/core';
import {MainMenuExtended} from '../route-list-root/main-menu-extended';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  @Input() route: MainMenuExtended;
}
