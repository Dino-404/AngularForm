import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatosLaboralesComponent } from './datos-laborales/datos-laborales.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrosComponent } from './registros/registros.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [AppComponent,
    FormularioComponent,
    DatosPersonalesComponent,
    NavbarComponent,
    DatosLaboralesComponent,
    DatosContactoComponent,
    WelcomePageComponent,
    RegistrosComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MdbCollapseModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
