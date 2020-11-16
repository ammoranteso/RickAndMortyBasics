import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { buildUrlApi } from '../../../utils/functions/api-url.function';
import { ApiController } from '../../../utils/enum/api-controller.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private readonly http: HttpClient) { }

  listCharacters(): Observable<{}> {
    return this.http.get(buildUrlApi(ApiController.CHARACTERS));
  }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }
}
