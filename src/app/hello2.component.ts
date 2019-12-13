import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
             <h1>inine template testing`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent2  {
  @Input() name: string;
}
