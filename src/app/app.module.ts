import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RestangularModule} from 'ng2-restangular';

import {AppComponent} from './app.component';
import {RestService} from "./services/rest.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RestangularModule.forRoot((RestangularProvider) => {
                RestangularProvider.setBaseUrl('https://todos-d479.restdb.io/rest/');
                RestangularProvider.setDefaultRequestParams({
                    apikey: 'ebe4bcdc424c1e9e032eb3b0ed06b05b66aed'
                });
            }
        ),
    ],
    providers: [RestService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
