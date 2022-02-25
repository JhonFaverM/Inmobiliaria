import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  asesores = {
    usuario: "",
    password: "",
    nombre: ""
  }

  form!: FormGroup

  contador = 0;

  constructor(private HttpClient: HttpClient, private toastr: ToastrService, private authService: AuthService,
    private routerService: Router, private fb: FormBuilder,  private _snackBar: MatSnackBar) {
      this.form = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.authService.isLogged()? this.routerService.navigate(['/home']) : console.log("No está logeado");
  }

  login(){
    if(this.asesores.password! && this.asesores.usuario!){
      this.authService.loginUser(this.asesores).subscribe((respuesta)=>{
        if((respuesta as any).token){
            //localStorage.setItem("token", (respuesta as any).token);
          //this.authService.saveLoginToken((respuesta as any).token);
          //this.toastrService.success((respuesta as any).msg)
          this.routerService.navigate(['/gestion']);
        }else{
          this.toastr.error((respuesta as any).msg, 'Error!!');
        }
        this._snackBar.open('Usuario o contraseña son invalidos', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      })
    }
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
  }

}

