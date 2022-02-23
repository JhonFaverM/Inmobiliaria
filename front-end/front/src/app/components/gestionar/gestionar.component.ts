import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
    estrato:"",
    tipoInmueble:"",
    metrosCuadrados:"",
    precioArriendo:"",
    habitaciones:"",
    baños:"",
    garaje:""
  }

  //dataSource = new MatTableDataSource(this.apartamento);
  dataSource: any;
  allApartamentos: any;


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

  eliminarFactura(){
  }

 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
  
  
   searchApartamentoByciudad(): void{
    if(this.apartamento.ciudad){
      this.apartamentoService.getApartamentosByCiudad(this.apartamento).subscribe((respuesta)=>{
        if((respuesta as any).Type=="error"){
          this.toastr.success((respuesta as any).msg, 'Error');          
        }else{
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.searchApartamentoByciudad()
        }
      })
    }
    console.log("desde search")
  
  }

  deleteApartamento(){
    
  }


  /**
     async deleteApartamento(){
    this.apartamentoService.deleteApartamento(this.apartamento).subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    })
  }
   */
 

  //db.apartamentos.find({ciudad:{$lt:"chipre"}})
   

  

}



