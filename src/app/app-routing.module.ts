import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DatosLaboralesComponent } from './datos-laborales/datos-laborales.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'datosPersonales', component: DatosPersonalesComponent },
  { path: 'datosLaborales', component: DatosLaboralesComponent },
  { path: 'datosContacto', component: DatosContactoComponent },
  { path: 'registros', component: RegistrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
