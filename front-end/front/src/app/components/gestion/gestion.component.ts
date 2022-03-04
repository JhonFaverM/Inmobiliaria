import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  allApartamentos: any;


  apartamento: any = {
    ciudad:"",
    localidad:"",
    tipoInmueble:"",
    direccion:"",
    estrato:"",
    metrosCuadrados:"",
    precioArriendo:"",
    habitaciones:"",
    banos:"",
  }

  constructor(private apartamentoService: ApartamentosService, private toastr: ToastrService, private _snackBar: MatSnackBar) { 
   
  }

  ngOnInit(): void {
    this.allApartamentos = []
    this.getAllApartamentos()

  }

  getAllApartamentos(){
    this.apartamentoService.getAllApartamentos().subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    })
  }


  saveApartamento(): void{
    if(this.apartamento.ciudad && this.apartamento.localidad && this.apartamento.tipoInmueble && this.apartamento.direccion && this.apartamento.estrato && 
      this.apartamento.metrosCuadrados && this.apartamento.precioArriendo && this.apartamento.habitaciones && this.apartamento.banos){
      this.apartamentoService.postCreateApartamento(this.apartamento).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          this.toastr.error((respuesta as any).msg, 'Error!');
        }else{
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.allApartamentos
        }
      })
    }else{
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
    console.log(this.apartamento)
    this._snackBar.open('Creaste un nuevo Inmueble', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

 

  reset(){
    this.apartamento.reset()
    console.log(this.apartamento)
  }

  deleteApartamento(){
  }
  
}

  






