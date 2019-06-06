import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Start } from "../models/start";
import { StartService } from "../services/start.service";
import { UserService } from "../services/user.service";

import { Nfc, NfcNdefData } from "nativescript-nfc";

@Component({
    selector: "ns-start",
    moduleId: module.id,
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.scss"]
})
export class StartComponent implements OnInit {
    start: Start;
    nfc: Nfc;
    userPicture: string;
    nfcIsAvailable: boolean = false;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private startService: StartService, public userService: UserService, private page: Page) {
        this.page.actionBarHidden = true;
        this.nfc = new Nfc();

        this.nfc.available().then((avail) => {
            this.nfcIsAvailable = avail;
        });

        this.nfcIsAvailable ? this.nfc.setOnNdefDiscoveredListener((data: NfcNdefData) => {
            if (data.message) {
                for (let m in data.message) {
                    let record = data.message[m];
                    this.init(record.payloadAsString);
                }
            }
        }, {
            // iOS-specific options
            stopAfterFirstRead: true,
            scanHint: "Scan a tag, baby!"
        }).then(() => {
              console.log("OnNdefDiscovered listener added");
        }) : this.init('IUOhwITH5c6XuukugdKH');
    }

    async ngOnInit() {
        this.start = this.startService.getInitial();
        await this.init(this.userService.getCurrentUserId());
    }

    async init(_userId: string) {
        this.userService.setCurrentUserId(_userId);
        await this.userService.getUserById(_userId);
    }

    ngOnDestroy(): void {
        this.nfcIsAvailable && this.nfc.setOnNdefDiscoveredListener(null).then(() => {
            console.log("OnNdefDiscovered listener removed");
        });
    }
}
