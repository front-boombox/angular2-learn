import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { UserComponent } from './component/user/user.component';
import { ChildComponent } from './child.component';
import { ChildComponent2 } from './component/child/child.component';
import { BoldDirective} from './bold.directive';
import { UpperDirective} from './upper.directive';
import { IfComponent} from './if.component';
import { ForComponent } from './for.component';
import { SwitchComponent } from './switch.compnent';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        ChildComponent,
        ChildComponent2,
        BoldDirective,
        UpperDirective,
        IfComponent,
        ForComponent,
        SwitchComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }