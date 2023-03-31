// ng serve to start on localhost
// ng g c [component name]
// ng g s [service name]

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { GameListComponent } from "./game-list/game-list.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, BannerComponent, GameListComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
