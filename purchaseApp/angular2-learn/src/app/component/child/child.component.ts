import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp2',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent2{ 
    @Input() userName: string;
    @Input() userAge: number;
}