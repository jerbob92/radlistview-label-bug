import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RandomLabelDirective } from "~/app/random-label/random-label.directive";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        RandomLabelDirective
    ],
    exports: [
        RandomLabelDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RandomLabelModule { }
