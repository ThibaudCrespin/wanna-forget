import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Location } from "@angular/common";

import { Memory } from "../models/memory";
import { MemoryService } from "../services/memory.service";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-memory",
    moduleId: module.id,
    templateUrl: "./memory.component.html",
    styleUrls: ["./memory.component.scss"],
})
export class MemoryComponent implements OnInit {
    private userId: Number;
    public user: User;
    public memories: Array<Memory>;
    public direction: Number;
    public isLoading: Boolean;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(
        private memoryService: MemoryService,
        private userService: UserService,
        private page: Page,
        private location: Location,
        private route: ActivatedRoute
    ) {
        this.page.actionBarHidden = true;
        this.route.params.subscribe((params) => {
            this.userId = params["userId"];
        });

        this.isLoading = true;
    }

    ngOnInit(): void {
        this.user = this.userService.getUserById(this.userId);
        this.memories = this.memoryService.getMemoriesByUser(this.userId);
    }

    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Swipe Direction: " + args.direction);

        this.direction = args.direction;

        switch(args.direction) {
            case 1: this.goBack(); break;
            default: null;
        }
    }

    goBack(event: any = ''): void {
        this.location.back();
    }

    onBusyChanged(event: any = ''): void {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);

    }
}
