import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RestangularModule} from 'ng2-restangular';

import {AppComponent} from './app.component';
import {RestService} from "./services/rest.service";

export function restangular (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://todos-d479.restdb.io/rest/');
    RestangularProvider.setDefaultRequestParams({
        apikey: '585a543ccdc9f08103309c29'
    });
    RestangularProvider.setRestangularFields({
        id: "_id"
    });
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RestangularModule.forRoot( restangular
        ),
    ],
    providers: [RestService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
