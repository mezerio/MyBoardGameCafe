// ng serve to start on localhost
// ng g c [component name]
// ng g s [service name]

// npm install -g firebase-tools
// firebase login
// firebase init
// instead of public make the file "dist/[name]"
// ng build --configuration=production
// firebase deploy

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
