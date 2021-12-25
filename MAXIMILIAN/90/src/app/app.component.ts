import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers: Array<number> = [1, 2, 3, 4, 5];
  oddNumbers: Array<number> = [1, 3, 5];
  evenNumbers: Array<number> = [2, 4, 6];
  onlyOdd: boolean = false;
  value: number = 5;
}
