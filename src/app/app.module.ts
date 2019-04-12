import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { MemoryModule } from "./memory/memory.module";

import { AppComponent } from "./app.component";

import { InitialComponent } from "./initial/initial.component";
import { StartComponent } from "./start/start.component";

import { StartService } from "./services/start.service";
import { InitialService } from "./services/initial.service";

import { UserService } from "./services/user.service";
import { MemoryService } from "./services/memory.service";
import { ListComponent } from "./memory/list/list.component";
import { VideoComponent } from "./memory/video/video.component";
import { MemoryComponent } from "./memory/memory.component";
import { HeaderComponent } from "./memory/header/header.component";
import { ItemComponent } from "./memory/list/item/item.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        MemoryModule
    ],
    declarations: [
        AppComponent,
        InitialComponent,
        StartComponent,
        MemoryComponent,
        HeaderComponent,
        ItemComponent,
        ListComponent,
        VideoComponent
    ],
    providers: [
        StartService,
        InitialService,
        MemoryService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
