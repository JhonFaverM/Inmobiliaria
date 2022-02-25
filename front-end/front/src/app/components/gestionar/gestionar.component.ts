import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private apartamentoService: ApartamentosService,  private toastr: ToastrService) { }

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


  
     async deleteApartamento(){
      if(this.apartamento.direccion){
          this.apartamentoService.deleteApartamento(this.apartamento).subscribe((respuesta)=>{
            if((respuesta as any).type=="error"){
           }else{
            this.allApartamentos() 
           }
           //this.allApartamentos = apartamentos
          })
          console.log("inmueble borrado");
          console.log(this.apartamento)
        }
      }
 

  //db.apartamentos.find({ciudad:{$lt:"chipre"}})

  
   

  

}



