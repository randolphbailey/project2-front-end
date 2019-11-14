import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProfileComponent } from "./components/profile/profile.component";
import { NewpostComponent } from "./components/newpost/newpost.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NewpostComponent,
    PostComponent,
    HomeComponent,

  ],
  exports: [ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
