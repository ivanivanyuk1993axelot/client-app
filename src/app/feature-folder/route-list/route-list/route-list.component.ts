import {Component, Input} from '@angular/core';
import {MainMenuExtended} from '../route-list-root/main-menu-extended';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent {
  @Input() isSearchInProgressBS$: BehaviorSubject<boolean>;
  @Input() routeList: Array<MainMenuExtended>;
}
