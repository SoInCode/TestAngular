import { Routes } from '@angular/router';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: 'mon-composant', component: MonComposantComponent},
    { path: 'form', component: FormComponent}
];
