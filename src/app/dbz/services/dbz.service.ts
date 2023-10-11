import { Injectable } from '@angular/core';
import {v4 as uuid }  from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  characters:Character[]=[{
    id:uuid(),
    name:'Kriling',
    power:100
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:9000
  }];

  addCharacter(newCharacter:Character):void{
    const nuevo:Character = {id:uuid(), ... newCharacter}

    this.characters.unshift(nuevo);
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character  => character.id!==id);
  }
}
