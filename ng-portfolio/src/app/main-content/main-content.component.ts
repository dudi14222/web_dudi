import { Component, OnInit,Input } from '@angular/core';
import { MenuEnum } from "../../menuEnum";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  menusOptions = MenuEnum;
  @Input() selectedOption;  

  ngOnInit() {
  }

}
