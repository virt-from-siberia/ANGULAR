import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  constructor() {
    console.log("constructor log");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    console.log("ngOnChanges log");
  }

  ngOnInit(): void {
    console.log("ngOnInit log");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck log");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit log");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked log");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit log");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked log");
  }
  
  ngOnDestroy(): void {
    console.log("OnDestroy log");
  }
}
