import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { MemoryService } from "~/app/services/memory.service";

@Component({
    selector: "ns-buttons",
    moduleId: module.id,
    templateUrl: "./buttons.component.html",
    styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
    private memoryId: Number;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private router: RouterExtensions, private memoryService: MemoryService) {

    }

    ngOnInit(): void {

    }

    goBack(event: any = ''): void {
        this.router.back();
    }

    eraseMemory(event: any = ''): void {
        console.log(event);
    }

    duplicateMemory(event: any = ''): void {
        console.log(event);
    }
}
