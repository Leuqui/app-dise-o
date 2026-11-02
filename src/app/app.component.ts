import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PersonalizarPage } from './pages/personalizar/personalizar.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, PersonalizarPage],
})
export class AppComponent {
  constructor() {}
}
