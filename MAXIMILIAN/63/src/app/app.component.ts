import { Component } from "@angular/core";

interface IonServerAdded {
  serverName: string;
  serverContent: string;
}
interface IServerElements {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: Array<IServerElements> = [
    {
      type: "server",
      name: "Test server",
      content: "just a test server",
    },
  ];

  onServerAdded(serverData: IonServerAdded): void {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: IonServerAdded): void {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = "Changed !";
  }
}
