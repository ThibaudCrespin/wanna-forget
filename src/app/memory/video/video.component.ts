import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Memory } from "../../models/memory";
import { MemoryService } from "~/app/services/memory.service";
import { ActivatedRoute } from "@angular/router";
import { GestureEventData } from "tns-core-modules/ui/gestures/gestures";

@Component({
    selector: "ns-video",
    moduleId: module.id,
    templateUrl: "./video.component.html",
    styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
    private memoryId: string;
    public memory: Memory;
    public showButtons: Boolean;
    public isPlaying: boolean = false;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private router: RouterExtensions, private route: ActivatedRoute, private memoryService: MemoryService) {
        this.route.params.subscribe((params) => {
            this.memoryId = params["id"];
        });
        this.showButtons = false;
    }

    async ngOnInit() {
        await this.memoryService.getMemoryById(this.memoryId);
        this.memory = this.memoryService.getActiveMemory();
    }

    goBack(event: any = ''): void {
        this.router.back();
    }

    onLongPress(args: GestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);

        this.showButtons = !this.showButtons;
    }

    playMemory(event: any) {
        console.log("PLAY");
        this.isPlaying = true;
    }
}
