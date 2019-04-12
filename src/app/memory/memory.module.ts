import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MemoryComponent } from "./memory.component";
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/item.component";
import { VideoComponent } from "./video/video.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        MemoryComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        // MemoryComponent,
        // HeaderComponent,
        // ListComponent,
        // ItemComponent,
        // VideoComponent
    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class MemoryModule { }
