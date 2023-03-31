import { Component } from "@angular/core";

@Component({
  selector: "HeaderComponent",
  template: `
    <h1>{{ thing }}</h1>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class HeaderComponent {
  thing = "sm"; // updates automantically when value is changed
  courses = ["course1", "cource2", "cource3"];
}
