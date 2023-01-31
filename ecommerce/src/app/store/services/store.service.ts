import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public createShop(shop:any){
    return this.http.post("api/api/store/new", shop)
  }

  public getShop(){
    return this.http.get("api/api/store")
  }

  public deleteShop(id:number){
    return this.http.delete(`api/api/store/${id}`)
  }
  
}
