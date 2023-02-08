import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public createShop(shop:any){
    return this.http.post(`${environment.SERVER_URL}/api/store/new`, shop)
  }

  public getShop(){
    return this.http.get(`${environment.SERVER_URL}/api/store`)
  }

  public deleteShop(id:number){
    return this.http.delete(`${environment.SERVER_URL}/api/store/${id}`)
  }

  public editStore(id:number, store:any){
    return this.http.put(`${environment.SERVER_URL}/api/store/${id}`, store)
  }

  public getStoreById(id:number){
    return this.http.get(`${environment.SERVER_URL}/api/store/${id}`)
  }
  
}
