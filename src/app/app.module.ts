// ng serve to start on localhost
// ng g c [component name]
// ng g s [service name]

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { GameListComponent } from "./game-list/game-list.component";

@NgModule({
  declarations: [AppComponent, BannerComponent, GameListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
