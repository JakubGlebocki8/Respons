import { Component } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bootstrap-demo';
}
