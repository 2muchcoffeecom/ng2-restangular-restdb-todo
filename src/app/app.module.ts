import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module'

import {AppComponent} from './app.component';
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
    declarations: [
        AppComponent,
        MaterializeDirective
    ],
    imports: [ CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}