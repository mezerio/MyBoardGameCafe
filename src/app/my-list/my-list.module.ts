import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyListRoutingModule } from "./my-list-routing.module";
import { MyListComponent } from "./my-list.component";
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [MyListComponent],
  imports: [CommonModule, MyListRoutingModule, HomeModule],
})
export class MyListModule {}
