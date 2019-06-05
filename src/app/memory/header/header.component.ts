import { Component, OnInit } from "@angular/core";

import { User } from "../../models/user";
import { UserService } from "~/app/services/user.service";

@Component({
    selector: "ns-header",
    moduleId: module.id,
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    user: User;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private userService: UserService) {}

    async ngOnInit() {
        this.user = await this.userService.getCurrentUser();
    }
}
