import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RadListViewExampleRoutingModule } from "./rad-list-view-example-routing.module";
import { RadListViewExampleComponent } from "./rad-list-view-example.component";
import { RandomLabelModule } from "~/app/random-label/random-label.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RadListViewExampleRoutingModule,
        NativeScriptUIListViewModule,
        RandomLabelModule
    ],
    declarations: [
        RadListViewExampleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RadListViewExampleModule { }
