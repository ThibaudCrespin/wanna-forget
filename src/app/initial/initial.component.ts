import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { Initial } from "../models/initial";
import { InitialService } from "../services/initial.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-init",
    moduleId: module.id,
    templateUrl: "./initial.component.html",
    styleUrls: ["./initial.component.scss"]
})
export class InitialComponent implements OnInit {
    init: Initial;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private initService: InitialService, private page: Page, private router: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.init = this.initService.getInitial();

        setTimeout(() => {
            this.router.navigate(['start']);
        }, 5000);
    }
}
