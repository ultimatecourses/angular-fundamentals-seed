import { Component }from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class='app'>
    {{title + '!'}}
    <div>
      {{numberOne}}
      {{numberTwo}}
    </div>
    <div>
      {{numberOne + numberTwo}}
    </div>
    <div>
      {{ isHappy ? ':)' : ':(' }}
    </div>

  </div>
  `

})

export class AppComponent{
  title:string;
  isHappy: boolean = true;
  numberOne: number =1;
  numberTwo: number =2;
  constructor(){
    this.title = 'Ultimate Angular'
  }
} 
