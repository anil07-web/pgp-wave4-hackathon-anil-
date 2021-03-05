import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transactions } from "../models/transaction";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor(private http: HttpClient) { }
  getTransactions(): Observable<Transactions> {
    return this.http.get<Transactions>('http://localhost:3000/Transactions');
  }
  addTransactions(t) {
    return this.http.post('http://localhost:3000/Transactions', t);
  }
}

