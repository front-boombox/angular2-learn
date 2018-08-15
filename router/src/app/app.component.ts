import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/about">О сайте</a>
                        <a [routerLink]="['item', '5']">item 5</a>
                        <a [routerLink]="['item', '8']">item 8</a>
                    </nav>
                    <router-outlet></router-outlet>
                    <button (click)="goHome()">На главную</button>
               </div>`
})
export class AppComponent {
     
    constructor(private router: Router){}
    goHome(){
         
        this.router.navigate(['']);
    }
}