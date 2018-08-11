import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name: string = 'Vasya';
    age: number = 30;
    isUsers: boolean;

    constructor(){}

    changeColor($event){
        if(this.isUsers){
            $event.target.classList.toggle('active');
        }
    }

    count: number = 0;
    increase() {
        this.count++;
    }

    ngOnInit(){
        setTimeout(() => {
            this.isUsers = true;
            console.log(this.isUsers);
        }, 5000);
    }
}