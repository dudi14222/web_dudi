import { IProduct } from './../product';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.css']
})
export class PortfolioItemsComponent implements OnInit {
  isFetched  = false;
  items: IProduct[] = [];
  errorMessage: string;
  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    if (this.itemsService.items === undefined) {
      this.itemsService.getProducts()
        .subscribe(products => {
          this.items = products;
          this.itemsService.items = products;
          this.isFetched = true;
        },
        error => this.errorMessage = <any>error
        );
    }
    else{
      this.setItems();
      this.isFetched = true;
    }
  }

  removeItem(id: number): void {
    this.itemsService.removeItem(id);
    this.setItems();
  }

  setItems(): void {
    this.items = this.itemsService.items;
  }
}
