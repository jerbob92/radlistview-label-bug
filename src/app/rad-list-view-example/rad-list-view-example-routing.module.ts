import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RadListViewExampleComponent } from "./rad-list-view-example.component";

const routes: Routes = [
    { path: "default", component: RadListViewExampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RadListViewExampleRoutingModule { }
