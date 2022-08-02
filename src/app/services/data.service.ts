import { Injectable } from '@angular/core';
import data from '../../assets/data.json'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: { id: number, name: string, price: number, url: string, description: string }[] = []

  constructor() { }
  getItems() {
    return data;
  }
}
