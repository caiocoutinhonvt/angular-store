import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  constructor(private http: HttpClient) { }
  
  public createCart(product:number){
    return this.http.post(`${environment.SERVER_URL}/api/cart/new`, {"product": product})
  }

  public getCart(){
    return this.http.get(`${environment.SERVER_URL}/api/usercart`)
  }

  public delProductCart(id:number){
    return this.http.delete(`${environment.SERVER_URL}/api/cart/${id}`)
  }
  


}
