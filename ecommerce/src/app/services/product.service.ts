import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  
  public getProducts(){
      return this.http.get(`${environment.SERVER_URL}/api/products`)
  }

  public createProducts(product:any){
    return this.http.post(`${environment.SERVER_URL}/api/products/new`, product)
  }

  public deleteProducts(product:any){
    return this.http.delete(`${environment.SERVER_URL}/api/products/${product}`, product)
  }

  public getProductById(product:any){
    return this.http.get(`${environment.SERVER_URL}/api/products/${product}`)
  }

  public editProduct(id:number,product:any){
    return this.http.put(`${environment.SERVER_URL}/api/products/${id}`, product)
  }
}

