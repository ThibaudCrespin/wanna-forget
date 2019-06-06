import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";
import { Memory } from "../../models/memory";
import { MemoryService } from "~/app/services/memory.service";
import { UserService } from "~/app/services/user.service";

@Component({
    selector: "ns-list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
    private userId: Number;
    @Input() items: Array<Memory>;

    public icons: any;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private router: RouterExtensions, private memoryService: MemoryService, private userService: UserService) {

    }

    ngOnInit(): void {
        this.items = this.memoryService.getMemories();
    }

    goBack(event: any = ''): void {
        this.userService.resetUser();
        this.router.back();
    }

    onCheckedChange(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked; // boolean
    }
}
