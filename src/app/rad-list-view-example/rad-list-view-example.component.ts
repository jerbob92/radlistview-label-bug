import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "@nativescript/core/data/observable-array/observable-array";

class ListViewItem {
    constructor(public id: number, public label: string) {
    }
}

@Component({
    selector: "RadListViewExample",
    templateUrl: "./rad-list-view-example.component.html"
})
export class RadListViewExampleComponent implements OnInit {
    items: ObservableArray<ListViewItem> = new ObservableArray<ListViewItem>();

    constructor() { }

    ngOnInit(): void {
        this.items.push([
            new ListViewItem(0, "1"),
            new ListViewItem(1, "2"),
            new ListViewItem(2, "3"),
            new ListViewItem(3, "4"),
            new ListViewItem(4, "5"),
            new ListViewItem(5, "6"),
            new ListViewItem(6, "7"),
            new ListViewItem(7, "8"),
            new ListViewItem(8, "9"),
            new ListViewItem(9, "10"),
            new ListViewItem(10, "11"),
            new ListViewItem(11, "12"),
            new ListViewItem(12, "13"),
            new ListViewItem(13, "14"),
            new ListViewItem(14, "15"),
            new ListViewItem(15, "16"),
            new ListViewItem(16, "17"),
            new ListViewItem(17, "18"),
            new ListViewItem(18, "19"),
            new ListViewItem(29, "20")
        ]);
    }
}
