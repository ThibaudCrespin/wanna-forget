import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Location } from "@angular/common";

import { Memory } from "../models/memory";
import { MemoryService } from "../services/memory.service";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
    selector: "ns-memory",
    moduleId: module.id,
    templateUrl: "./memory.component.html",
    styleUrls: ["./memory.component.scss"],
})
export class MemoryComponent implements OnInit {
    private userId: string;
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
        private location: Location
    ) {
        this.page.actionBarHidden = true;
        this.user = this.userService.getCurrentUser();
        this.userId = this.userService.getCurrentUserId();

        this.isLoading = true;
    }

    async ngOnInit() {
        await this.memoryService.getMemoriesByUser(this.userId);
    }

    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe!", args);
        console.log("Swipe Direction: " + args.direction);

        this.direction = args.direction;

        switch(args.direction) {
            case 1: this.goBack(); break;
            // case 2: this.nextMemory(); break;
            case 4: this.scrapMemory(); break;
            case 8: this.deleteMemory(); break;
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

    deleteMemory(): void {
        const activeMemory = this.memoryService.getActiveMemory().id;
        this.memoryService.deleteMemory(activeMemory);
        this.goBack();
    }

    scrapMemory(): void {
        const activeMemory = this.memoryService.getActiveMemory();
        this.memoryService.scrapMemory(activeMemory);
        this.goBack();
    }

    nextMemory(): void {
        this.memoryService.getNextMemory();
    }
}
