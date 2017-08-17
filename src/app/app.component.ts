import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
          <h1>Angular SandBox {{name}}</h1>
          <books></books>  
  `,
})
export class AppComponent  { 
  name = 'Noor';   
}
