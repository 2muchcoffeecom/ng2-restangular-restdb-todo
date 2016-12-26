import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RestangularModule} from 'ng2-restangular';

import {RestService} from "../services/rest.service";

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
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RestangularModule.forRoot( restangular
        ),
    ],
    providers: [RestService],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
