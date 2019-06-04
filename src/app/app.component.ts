import { Component, OnInit } from "@angular/core";

const firebase = require("nativescript-plugin-firebase");
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
            instance => {
                console.log("Firebase Init OK", instance);
            },
            error => {
                console.error("Firebase Init ERROR", error);
            }
        );
    }
 }
