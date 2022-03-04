import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})
export class GestionarComponent implements OnInit {

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

  //dataSource = new MatTableDataSource(this.apartamento);
  dataSource: any;
  allApartamentos: any;
  direccion: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  getAllApartamentos(){
    this.apartamentoService.getAllApartamentos().subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    })
  }


  constructor(private apartamentoService: ApartamentosService,  private toastr: ToastrService,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.allApartamentos = []
    this.getAllApartamentos()
  }

 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
  
  
  searchByDireccion(direccion: any): void{
    if(this.apartamento.direccion){
      this.apartamentoService.getAllApartamentos().subscribe((respuesta)=>{
        if((respuesta as any).Type=="error"){
          this.toastr.success((respuesta as any).msg, 'Error');          
        }else{
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.searchByDireccion(direccion)
        }
        console.log(this.apartamento)
      })
    }
  }


  
  /**
   async deleteApartamento(){
          this.apartamentoService.deleteApartamento(this.apartamento).subscribe((apartamentos)=>{           
           this.allApartamentos = apartamentos
          })
          console.log("inmueble borrado");
          console.log(this.apartamento)
        
      }
 
   */


  
  deleteApartamento(apartamento: any) {
    console.log(this.apartamento);

    this.apartamentoService.deleteApartamento(this.direccion).subscribe((apartamentos)=>{
    this.allApartamentos = this.apartamento
    })
    this._snackBar.open('Inmueble eliminado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  

}



 
 

 

