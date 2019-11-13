import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PostapostComponent } from './postapost/postapost.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, PostapostComponent, NewpostComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
