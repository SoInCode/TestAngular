import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MonComposantComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
