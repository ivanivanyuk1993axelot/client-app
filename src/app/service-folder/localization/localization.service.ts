import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public localeBS$ = new BehaviorSubject<string>(navigator.language);
}
