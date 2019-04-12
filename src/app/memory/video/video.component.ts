import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Memory } from "../../models/memory";
import { MemoryService } from "~/app/services/memory.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-video",
    moduleId: module.id,
    templateUrl: "./video.component.html",
    styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
    private memoryId: Number;
    public memory: Memory;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private router: RouterExtensions, private route: ActivatedRoute, private memoryService: MemoryService) {
        this.route.params.subscribe((params) => {
            this.memoryId = params["id"];
        });
    }

    ngOnInit(): void {
        this.memory = this.memoryService.getMemoryById(this.memoryId);
    }

    goBack(event: any = ''): void {
        this.router.back();
    }
}
