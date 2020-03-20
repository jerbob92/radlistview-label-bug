import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListViewExampleComponent } from "./list-view-example.component";

const routes: Routes = [
    { path: "default", component: ListViewExampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListViewExampleRoutingModule { }
