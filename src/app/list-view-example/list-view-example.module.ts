import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ListViewExampleRoutingModule } from "./list-view-example-routing.module";
import { ListViewExampleComponent } from "./list-view-example.component";
import { RandomLabelModule } from "~/app/random-label/random-label.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListViewExampleRoutingModule,
        RandomLabelModule
    ],
    declarations: [
        ListViewExampleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListViewExampleModule { }
