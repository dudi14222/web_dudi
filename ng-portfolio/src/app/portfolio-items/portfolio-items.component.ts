import { IProduct } from './../product';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.css']
})
export class PortfolioItemsComponent implements OnInit {
  items: IProduct[] = [];
  constructor(private itemsService: ItemsService) { 
    console.log(itemsService.items[0].title);
  }

  ngOnInit() {
    this.setItems();
  }

  removeItem(id: number): void{
    this.itemsService.removeItem(id);
    this.setItems();    
  }

  setItems(): void{
    this.items = this.itemsService.items;
  }
}
