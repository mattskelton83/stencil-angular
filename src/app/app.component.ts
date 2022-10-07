import { Component } from '@angular/core';

import {} from 'matt-sk-stencil-component-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stencil-angular';

  test(event: any) {
    console.log(event);
  }

  Click(event: any) {
    console.log(event, 'clicked');
  }
}
