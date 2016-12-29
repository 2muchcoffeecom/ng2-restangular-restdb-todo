import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module'
import {AppComponent} from './app.component';
import {MaterializeDirective} from "angular2-materialize";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
    declarations: [
        AppComponent,
        MaterializeDirective
    ],
    imports: [
        CoreModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}