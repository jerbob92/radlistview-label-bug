import { ChangeDetectorRef, Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[RandomLabel]"
})
export class RandomLabelDirective implements OnChanges {
    randomLabel: string = "";

    @Input()
    inputLabel?: string;

    constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.setRandomLabel();
    }

    getRandomString(): string {
        let text = "";
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        const amountOfChars = Math.ceil(Math.random() * 20);
        for (let x = 0; x < amountOfChars; x++) {
            const rand = Math.floor(Math.random() * alphabet.length);
            text += alphabet[rand];
        }

        return text;
    }

    setRandomLabel(): Promise<any> {
        let newRandomLabel = "";

        const setLabel = (): Promise<any> => {
            newRandomLabel = "";

            newRandomLabel = "Start of " + this.inputLabel + " | " + this.getRandomString() + " | end of " + this.inputLabel;

            if (newRandomLabel !== this.randomLabel) {
                this.randomLabel = newRandomLabel;
                this.el.nativeElement.text = this.randomLabel;
                this.cdr.markForCheck();
            }

            return Promise.resolve();
        };

        return setLabel();
    }
}
