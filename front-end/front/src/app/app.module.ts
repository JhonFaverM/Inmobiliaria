import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VoidComponent } from './components/void/void.component';
import { LoginComponent } from './components/login/login.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { InterceptorService } from './services/interceptor.service';
import { GestionarComponent } from './components/gestionar/gestionar.component';

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoidComponent,
    LoginComponent,
    ApartamentosComponent,
    NavbarComponent,
    GestionComponent,
    GestionarComponent,
    //AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    //angular material
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule

  ],
  //angular material
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],

  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
