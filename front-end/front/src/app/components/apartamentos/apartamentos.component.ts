import { Component, OnInit, ViewChild } from '@angular/core';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.css']
})
export class ApartamentosComponent implements OnInit {
  allApartamentos: any;
  allCiudad: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  apartamento: any = {
    ciudad:"",
    localidad:"",
    tipoInmueble:"",
    direccion:"",
    estrato:"",
    metrosCuadrados:"",
    precioArriendo:"",
    habitaciones:"",
    baños:"",
    
  }

  constructor(private apartamentoService: ApartamentosService, private toastr: ToastrService,) {     
  }

  ngAfterViewInit() {
    this.apartamento.paginator = this.paginator;
    this.apartamento.sort = this.sort;
  }

  ngOnInit(): void {
    this.allApartamentos = []
    this.getAllApartamentos()
    this.allCiudad = []
  }

  searchApartamentoByCiudad(){
    this.apartamentoService.getAllApartamentosByCiudad().subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    })
    console.log(this.allApartamentos);
    
  }
  getAllCiudad(){
    this.apartamentoService.getAllApartamentosByCiudad().subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    })
    console.log(this.allCiudad);
    
  }
  

  getAllApartamentos(){
    this.apartamentoService.getAllApartamentos().subscribe((apartamentos)=>{
      this.allApartamentos = apartamentos
    }) 
    
  }


  
}
