import {Component} from '@angular/core';

@Component({
    selector: 'for-comp',
    template: `<ul>
                    <li *ngFor="let item of items; let i = index">Item {{i}} - {{item}}</li>
                </ul>`
})
export class ForComponent{
    constructor(){}

    items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
}