import {Component, Input} from '@angular/core';
import {MainMenuExtended} from '../route-list-root/main-menu-extended';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  @Input() isSearchInProgressBS$: BehaviorSubject<boolean>;
  @Input() route: MainMenuExtended;

  public isExpanded = false;

  public onExpandedChange(expanded: boolean) {
    if (!this.isSearchInProgressBS$.getValue()) {
      this.isExpanded = expanded;
    }
  }
}
