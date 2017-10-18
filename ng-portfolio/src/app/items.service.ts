import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ItemsService {
  private _itemsUrl = 'https://api.myjson.com/bins/18qaqf';
  private _items: IProduct[];
  constructor(private httpClient: HttpClient) { 
    console.log('ItemsService constructor');
  }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this._itemsUrl)
        .do(data => console.log('JSON.stringify(data)'))
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
    
  }
  get items(): IProduct[] {
    return this._items;
  }

  set items(items: IProduct[]){
    this._items = items;
  }

  removeItem(id: number): void{
    this._items = this._items.filter(item=> item.id !== id);
  }
  
  addItem(item: IProduct): void{
    this._items.push(item);    
  }
  
}
