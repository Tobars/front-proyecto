import { Routes } from '@angular/router';
import { Pregunta } from './pregunta/pregunta';
import { Celebracion } from './celebracion/celebracion';

export const routes: Routes = [
  { path: '', component: Pregunta },
  { path: 'celebracion', component: Celebracion }
];
