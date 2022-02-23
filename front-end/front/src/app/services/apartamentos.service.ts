import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  
  constructor(private httpClient: HttpClient) { }

  getAllApartamentos(){
    return this.httpClient.get("http://localhost:5000/apartamentos/")
  }

  getAllApartamentosByCiudad(){
    return this.httpClient.get("http://localhost:5000/apartamentos/ciudad")
  }

  
  getAllCiudad() {
    return this.httpClient.get("http://localhost:5000/apartamentos/")
  }


  deleteApartamento(apartamento: any) {
    return this.httpClient.delete("http://localhost:5000/apartamentos/")
  }

  postCreateApartamento(apartamento: any){
    return this.httpClient.post("http://localhost:5000/apartamentos/",apartamento,{headers: {"Content-Type": "application/json"} })
  }

  getApartamentosByCiudad(ciudad:any){
    return this.httpClient.get("http://localhost:5000/apartamentos/",ciudad)
  }

  searchApartamentoByCiudad(ciudad: any){
    return this.httpClient.get("http://localhost:5000/apartamentos/",ciudad)
  }

}

/*
  constructor((private httpClient: HttpClient) {
  }

  createApartamento(apartamento: any){
    return this.httpClient.post("http://localhost:5000/apartamentos/",apartamento,{headers:{"Content-Type":"application/json"}})
  }
  */

