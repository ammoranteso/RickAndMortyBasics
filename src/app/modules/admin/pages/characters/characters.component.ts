import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CharacterFacade } from '../../../../domain/application/facade/character.facade';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersObs$?: Observable<any>;

  constructor(private readonly characterFacade: CharacterFacade) { }

  ngOnInit(): void {
    this.getListCharacters();
  }

  // getListCharacters(): void {
  //   this.characterFacade.listCharacters().subscribe(
  //     (data => { console.log(data); })
  //   );
  // }
  getListCharacters(): void {
    this.charactersObs$ = this.characterFacade.listCharacters().pipe(
      tap(res => ({ res }))
    );
  }



}
