import { Component }from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class='app'>
    <input 
    type='text'
    [value]='name'
    (input)='handleChange($event.target.value)'> 
  
  
   <div *ngIf='name.length > 2'>
    Searching for..
    {{ name }}
    </div>
  </div>
    <!-- Why * (if not we would have to write all this: 
    
    <template> 
      <div ngIf+'name.legth > 2'
        Searching for..
        {{name}}
      </div>
    </template> 
    )-->
  `
})

export class AppComponent{
  name: string = 'Todd';
  handleChange(value: string) {
    this.name = value;
  }
} 
