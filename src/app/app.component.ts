import { Component } from "@angular/core";

import * as firebase from "nativescript-plugin-firebase";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';

registerElement("VideoPlayer", () => Video);

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    ngOnInit(): void {

        firebase.init({
                  }).then(
                    instance => {
                      console.log("firebase.init done");
                    },
                    error => {
                      console.log(`firebase.init error: ${error}`);
                    }
                  );
        };
 }
