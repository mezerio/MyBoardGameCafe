import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyListRoutingModule } from "./my-list-routing.module";
import { MyListComponent } from "./my-list.component";
import { HomeModule } from "../home/home.module";
import { NavigationEnd, Router } from "@angular/router";

@NgModule({
  declarations: [MyListComponent],
  imports: [CommonModule, MyListRoutingModule, HomeModule],
})
export class MyListModule {
  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to the NavigationEnd event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      }
    });
  }
}
