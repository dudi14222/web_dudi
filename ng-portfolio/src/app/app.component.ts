import { Component } from '@angular/core';
import { MenuEnum } from "../menuEnum";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socialLink = [
      {title: 'Facebook', aClass: 'icoFacebook', class: 'fa fa-facebook', href: 'https://www.facebook.com/dudi.hamdi'},
      {title: 'Twitter', aClass: 'icoTwitter', class: 'fa fa-twitter', href: 'https://twitter.com/?lang=en'},
      {title: 'Google +', aClass: 'icoGoogle', class: 'fa fa-google-plus', href: 'https://plus.google.com/discover?hl=iw'},
      {title: 'Linkedin', aClass: 'icoLinkedin', class: 'fa fa-linkedin', href: 'https://www.linkedin.com/'}
    ];
  menuInitOption = MenuEnum.Items;

  onSelectMenuItem(menuItem: string) {
    switch (menuItem) {
      case 'Items': {
        this.menuInitOption = MenuEnum.Items;
        break;
      }
      case 'AddItem': {
        this.menuInitOption = MenuEnum.AddItem;
        break;
      }
      case 'About': {
        this.menuInitOption = MenuEnum.About;
        break;
      }
    }
  }

}
