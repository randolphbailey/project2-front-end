import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newpost",
  templateUrl: "./newpost.component.html",
  styleUrls: ["./newpost.component.css"]
})
export class NewpostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  publishPost(title: HTMLInputElement, post: HTMLInputElement): boolean {
    console.log(title.value, post.value);
    return false;
  }
}
