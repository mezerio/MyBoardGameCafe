import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  navShow: boolean = false;
  constructor() {}

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        this.navShow = true;
      } else {
        this.navShow = false;
      }
    };
  }
}
