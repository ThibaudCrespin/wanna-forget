import { Component, OnInit, Input } from "@angular/core";

import { Memory } from "../../../models/memory";

@Component({
    selector: "ns-list-item",
    moduleId: module.id,
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
    @Input() item: Memory;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor() {

    }

    ngOnInit(): void {

    }
}
