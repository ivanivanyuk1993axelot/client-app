import {MainMenu} from '../../../service-folder/menu/main-menu';
import {BehaviorSubject} from 'rxjs';

export interface MainMenuExtended extends MainMenu {
  countOfChildrenThatMatchSearchBS$: BehaviorSubject<number>;
  countOfChildrenThatMatchUrlBS$: BehaviorSubject<number>;
  hasChildrenThatMatchSearchBS$: BehaviorSubject<boolean>;
  hasChildrenThatMatchUrlBS$: BehaviorSubject<boolean>;
  items: Array<MainMenuExtended>;
  levenshteinDistanceToSearchStringAmortizedBS$: BehaviorSubject<number>;
  matchesSearchBS$: BehaviorSubject<boolean>;
  matchesUrlBS$: BehaviorSubject<boolean>;
}
