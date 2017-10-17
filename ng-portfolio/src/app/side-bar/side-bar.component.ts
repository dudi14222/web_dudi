import { Component, OnInit, Output, EventEmitter, AfterContentInit, ContentChild, ContentChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, AfterContentInit {
 
  @ContentChildren("socialLink") socialLink: QueryList<ElementRef>;

  @Output() onSelectMenuItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {    
    this.socialLink.forEach(a => {
      let l:HTMLLinkElement = a.nativeElement;
      l.target = '_blank';           
    });  
  }
  
  onMenuItemClicked(id) {    
    this.onSelectMenuItem.emit(id);
  }

}
