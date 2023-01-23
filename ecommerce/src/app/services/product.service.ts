import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  SERVER_URL = "http://localhost:3500"

  constructor(private http: HttpClient) { }
    
  public getProducts(){
      return this.http.get("/api/api/products")
  }

  public createProducts(product:any){
    return this.http.post("api/api/products/new", product)
  }

  public deleteProducts(product:any){
    return this.http.delete(`api/api/products/${product}`, product)
  }

  public getProductById(product:any){
    return this.http.get(`api/api/products/${product}`)
  }

  public editProduct(id:any,product:any){
    return this.http.put(`api/api/products/${product}`, product)
  }
}

