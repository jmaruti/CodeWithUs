import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <fieldset>
    
    <img [src]="image" />
  </fieldset>
  <label [style.color]='color'>Favourite Color: </label> {{color}}
  <button (click)='clicked()'>Toggle Color</button>
  <div style='border: 1px solid red' [hidden]='hideAddress'>
  <br />
  Street: {{street}} 
  <br/>
  City: {{city}}
</div>
  <button (click)='addressClick()'>Show/Hide Address</button>

  <br/>
  <select #selector (change)='regionChange(selector.value)'>
    <option>East</option>
    <option>West</option>
    <option>North</option>
    <option>South</option>
  </select>

  <br/>
  <p>{{currentRegion}}</p>
  `,
})
export class AppComponent { 
  name = 'Alex Smith'; 
  image="favicon.ico";
  color = 'red';
  
  currentRegion = '';

  regionChange(region :string) 
  {
      this.currentRegion = region;
  }

  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  street = 'Appu Street';
  city = 'New York';
  region = '';


  clicked() {
    this.color = this.color == 'red' ? 'blue' : 'red';
  }
}
