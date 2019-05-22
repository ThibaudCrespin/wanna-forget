import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-params",
    moduleId: module.id,
    templateUrl: "./parameters.component.html",
    styleUrls: ["./parameters.component.scss"]
})
export class ParametersComponent implements OnInit {
    public dateChoice: String;
    public isMorning: Boolean;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor() {

    }

    ngOnInit(): void {

    }

    onReturnPress(event: any): void {
        console.log("PRESS: ", event);
    }

    onFocus(event: any): void {
        console.log("FOCUS: ", event);
    }

    onBlur(event: any): void {
        console.log("BLUR: ", event);
    }

    onSecondChecked(event: any): void {
        console.log("CHECK: ", event);
    }
}
