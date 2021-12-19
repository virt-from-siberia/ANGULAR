import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onInternalFired(firedNumber: number): void {
    console.log("firedNumber", firedNumber);
  }
}
