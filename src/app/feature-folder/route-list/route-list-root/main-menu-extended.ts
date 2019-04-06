import {MainMenu} from '../../../service-folder/menu/main-menu';
import {BehaviorSubject} from 'rxjs';

export interface MainMenuExtended extends MainMenu {
  countOfChildrenThatMatchSearchRegExpBS$: BehaviorSubject<number>;
  countOfChildrenThatMatchUrlBS$: BehaviorSubject<number>;
  hasChildrenThatMatchSearchRegExpBS$: BehaviorSubject<boolean>;
  hasChildrenThatMatchUrlBS$: BehaviorSubject<boolean>;
  items: Array<MainMenuExtended>;
  matchesSearchRegExpBS$: BehaviorSubject<boolean>;
  matchesUrlBS$: BehaviorSubject<boolean>;
}
