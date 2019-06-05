import { Component, OnInit } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';

registerElement("VideoPlayer", () => Video);

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        firebase.init({}).then(
            () => {
                console.log("Firebase OK");
            },
            error => {
                console.error("Firebase ERROR", error);
            }
        );
    }
 }
