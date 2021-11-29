import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Billing } from '../billings/billing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingsService {
  private apiBilling = "http://localhost:8083"

  constructor(private httpClient:HttpClient) { }

 
   public getBillings(): Observable<Billing[]>{
    return this.httpClient.get<Billing[]>(`${this.apiBilling}/FullBill/1`);
  } 

 /*  public getBilling(billingId: number){
  return this.httpClient.get(`${this.apiBilling}/FullBill/${billingId}`)
  } */

}
