import { Routes } from '@angular/router';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';

export const routes: Routes = [
    {path: 'tabla', component: TablaPersonasComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'formulario-reactivo', component: FormularioReactivoComponent}
];
