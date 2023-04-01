import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { GameListComponent } from "./game-list/game-list.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    GameListComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class HomeModule {}
