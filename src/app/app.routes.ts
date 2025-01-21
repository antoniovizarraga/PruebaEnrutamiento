import { Routes } from '@angular/router';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    {path: 'tabla', component: TablaPersonasComponent},
    {path: 'formulario', component: FormularioComponent}
];
