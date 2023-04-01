import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyListComponent } from "./my-list.component";

const routes: Routes = [
  {
    path: "",
    component: MyListComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListRoutingModule {}
