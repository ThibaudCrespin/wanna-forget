import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { InitialComponent } from './initial/initial.component';
import { StartComponent } from './start/start.component';
import { MemoryComponent } from "./memory/memory.component";
import { ListComponent } from "./memory/list/list.component";
import { VideoComponent } from "./memory/video/video.component";

const routes: Routes = [
    { path: "", redirectTo: "/init", pathMatch: "full" },
    { path: "init", component: InitialComponent },
    { path: "start", component: StartComponent },
    {
        path: "memory",
        component: MemoryComponent,
        children: [
            { path: "", redirectTo: "list", pathMatch: "full" },
            { path: "list", component: ListComponent },
            { path: "video/:id", component: VideoComponent },
        ]
    },
    { path: '**', component: InitialComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
