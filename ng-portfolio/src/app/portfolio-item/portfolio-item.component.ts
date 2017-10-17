import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() title;
  @Input() imagePath;
  @Input() itemId;

  @Output() onRemoveItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onRemoveItemClicked(): void{
    this.onRemoveItem.emit(this.itemId);
  }  

}
