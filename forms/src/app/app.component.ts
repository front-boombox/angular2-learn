import { Component} from '@angular/core';
         
export class Phone{
    constructor(public title: string, 
                public price: number, 
                public company: string)
    { }
}
 
@Component({
    selector: 'forms-app',
    template: `<div class="col-xs-8"> 
                    <div class="form-group">
                        <label>Название модели</label>
                        <input class="form-control" name="title" [(ngModel)]="title" />
                    </div>
                    <div class="form-group">
                        <label>Цена</label>
                        <input type="number" class="form-control" name="price" [(ngModel)]="price" />
                    </div>
                    <div class="form-group">
                        <label>Производитель</label>
                        <select class="form-control" name="company" [(ngModel)]="company">
                            <option  *ngFor="let comp of companies" [value]="comp">
                                {{comp}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default" (click)="addPhone(title, price, company)">Добавить</button>
                    </div>
              </div>
              <div><h3>Добавленные элементы</h3>
                    <ul *ngFor="let p of phones">
                        <li>{{p.title}} ({{p.company}}) - {{p.price}}</li>
                    </ul>
              </div>`
})
export class AppComponent { 
 
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
    addPhone(title: string, price: number, company: string){
        this.phones.push(new Phone(title, price, company));
    }
}