import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/product';
import data from '../../assets/data.json';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  getItems(): Product[] {
    this.http
      .get<Product[]>('../../assets/data.json')
      .subscribe((a) => (this.items = a));
    return this.items;
  }
}
