import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { UserComponent } from './component/user/user.component';
import { ChildComponent } from './child.component';
import { ChildComponent2 } from './component/child/child.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        ChildComponent,
        ChildComponent2
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }