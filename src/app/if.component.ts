import {Component} from '@angular/core';

@Component({
    selector: 'if-comp',
    template: `<p *ngIf="condition">
                    Привет мир
                </p>
                <p *ngIf="!condition">
                    Пока мир
                </p>
                <button (click)="toggle()">Toggle</button>`
})
export class IfComponent{
    constructor(){}
    
    condition: boolean = true;

    toggle(){
        this.condition = !this.condition;
    }
}