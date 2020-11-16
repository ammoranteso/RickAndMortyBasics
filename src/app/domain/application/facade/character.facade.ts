import { Injectable } from '@angular/core';
import { CharacterService } from '../../infrastructure/api/character.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterFacade {

  constructor(private readonly api: CharacterService) { }

  listCharacters(): Observable<{}> {
    return this.api.listCharacters();
  }

}
