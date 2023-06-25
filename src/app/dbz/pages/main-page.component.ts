import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  characters:Character[]=[{
    name:'Kriling',
    power:100
  },{
    name:'Goku',
    power:9500
  },{
    name:'Vegeta',
    power:9000
  }];

  onNewCharacter(newCharacter:Character):void{
    console.log('MainPage');
    console.log(newCharacter);
    this.characters.unshift(newCharacter);
  }
}
