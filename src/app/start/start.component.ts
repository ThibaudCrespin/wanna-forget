import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { Start } from "../models/start";
import { StartService } from "../services/start.service";
import { UserService } from "../services/user.service";

@Component({
    selector: "ns-start",
    moduleId: module.id,
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.scss"]
})
export class StartComponent implements OnInit {
    userId: string;
    start: Start;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private startService: StartService, private userService: UserService, private page: Page) {
        this.page.actionBarHidden = true;
        this.userId = 'IUOhwITH5c6XuukugdKH';
    }

    async ngOnInit() {
        this.start = this.startService.getInitial();
        this.userService.setCurrentUserId(this.userId);
        await this.userService.getUserById(this.userId);
    }
}
