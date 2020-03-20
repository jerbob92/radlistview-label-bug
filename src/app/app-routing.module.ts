import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(listViewTab:list-view-example/default//radListViewTab:rad-list-view-example/default)",
        pathMatch: "full"
    },

    {
        path: "list-view-example",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/list-view-example/list-view-example.module").then((m) => m.ListViewExampleModule),
        outlet: "listViewTab"
    },
    {
        path: "rad-list-view-example",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/rad-list-view-example/rad-list-view-example.module").then((m) => m.RadListViewExampleModule),
        outlet: "radListViewTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
