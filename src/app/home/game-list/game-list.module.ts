import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "../home-routing.module";
import { GameListComponent } from "./game-list.component";

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class GameListModule {}
