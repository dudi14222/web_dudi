import { IProduct } from './product';
import { Injectable } from '@angular/core';
import mockData from '../data/jsonData';
@Injectable()
export class ItemsService {
  private _items: IProduct[];
  constructor() { 
    this._items = mockData;    
  }

  get items(): IProduct[] {
    return this._items;
  }

  removeItem(id: number): void{
    this._items = this._items.filter(item=> item.id !== id);
  }
  
  addItem(item: IProduct): void{
    this._items.push(item);    
  }
  
}
