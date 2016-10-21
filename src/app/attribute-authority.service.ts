import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from '../environments/environment';
import {Http} from "@angular/http";
import {AttributeAuthorityKeys} from "./attribute-authority-keys";

@Injectable()
export class AttributeAuthorityService {

  constructor(private http: Http) {
  }

  generateKeys(attributes: string[]): Observable<AttributeAuthorityKeys> {
    let data = {attributes};
    return this.http.post(`${environment.apiHost}/attribute_authorities/generate_keys`, data).map(response => response.json());
  }
}
