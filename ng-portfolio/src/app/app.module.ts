import { ItemsService } from './items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainContentComponent,
    AboutComponent,
    PortfolioItemsComponent,
    PortfolioItemComponent,
    AddPortfolioComponent,
    LoadingAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
