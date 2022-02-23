import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

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
    estrato:"",
    tipoInmueble:"",
    metrosCuadrados:"",
    precioArriendo:"",
    habitaciones:"",
    baños:"",
    garaje:""
  }

  constructor(private apartamentoService: ApartamentosService, private toastr: ToastrService, private _snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.apartamento = this.fb.group({
      ciudad:  ['', Validators.required],
      localidad:  ['', Validators.required],
      estrato:  ['', Validators.required],
      tipoInmueble:  ['', Validators.required],
      metrosCuadrados:  ['', Validators.required],
      precioArriendo:  ['', Validators.required],
      habitaciones:  ['', Validators.required],
      baños:  ['', Validators.required],
      garaje:  ['', Validators.required],
    })
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
    if(this.apartamento.ciudad && this.apartamento.localidad && this.apartamento.estrato && this.apartamento.tipoInmueble && 
      this.apartamento.metrosCuadrados && this.apartamento.precioArriendo && this.apartamento.habitaciones && this.apartamento.banos && this.apartamento.garaje){
      this.apartamentoService.postCreateApartamento(this.apartamento).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          this.toastr.error((respuesta as any).msg, 'Error!');
        }else{
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Bien!');
          //this.getAllApartamentos()
        }
      })
    }else{
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
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

  


/*
const deleteApartamento = (req, res) => {
    Apartamento.deleteOne({ "ciudad":req.query.ciudad, "localidad": req.query.localidad }, (err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deleteCount == 1 ? res.send("Se eliminó un documento") : res.send("No se eliminó ningun documento")
    })
}
*/ 

/*
export class GestionComponent implements OnInit {

  apartamentos: any = [];

  constructor(private apartamentosService: ApartamentosService) { }
  
  ngOnInit(): void {
    this.apartamentosService.listAllApartamentos().subscribe((response)=>{
      console.log(response)
      this.apartamentos = response as any
    })
  }

}
  */

