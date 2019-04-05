import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ListResponse} from './list-response';
import {environment} from '../../../environments/environment';
import {ListRequestConfig} from './list-request-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _httpClient: HttpClient,
  ) {
  }

  public createItem$(
    className: string,
    domainObject: any,
  ): Observable<any> {
    return this._httpClient.post<any>(
      `${environment.apiUrl}/${className}/CreateItem`,
      {domainObject},
    );
  }

  public deleteItem$(
    className: string,
    uuid: string,
  ): Observable<any> {
    return this._httpClient.post<any>(
      `${environment.apiUrl}/${className}/DeleteItem`,
      {uuid},
    );
  }

  public findItems$(
    className: string,
    listRequestConfig?: ListRequestConfig | any,
  ): Observable<ListResponse> {
    return this._httpClient.post<ListResponse>(
      `${environment.apiUrl}/${className}/FindItems`,
      new ListRequestConfig(listRequestConfig),
    );
  }

  public getItemByCode$(
    className: string,
    code: string,
  ): Observable<any> {
    return this._httpClient.post<any>(
      `${environment.apiUrl}/${className}/GetItemByCode`,
      {code},
    );
  }
}
