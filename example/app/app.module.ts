import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ENgxPaginationModule} from "../../src/e-ngx-pagination.module";

@NgModule({
    imports: [
        BrowserModule,
		ENgxPaginationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
