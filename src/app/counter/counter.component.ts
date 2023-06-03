import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: "./counter.template.html"
})

export class CounterComponent {
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter=10;
  }

}
