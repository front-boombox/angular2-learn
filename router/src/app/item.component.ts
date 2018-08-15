import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
  
@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>`
})
export class ItemComponent { 
     
    private id: number;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute){
         
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
}