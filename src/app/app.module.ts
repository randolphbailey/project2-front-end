import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
//import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { NewpostComponent } from "./components/newpost/newpost.component";
import { PostComponent } from "./components/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NewpostComponent,
    PostComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
