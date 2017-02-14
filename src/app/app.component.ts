import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <fieldset>
    
    <img [src]="image" />
  </fieldset>
  <label [style.color]='color'>Favourite Color: </label> {{color}}
  `,
})
export class AppComponent { 
  name = 'Alex Smith'; 
  image="favicon.ico";
  color = 'red';
}
