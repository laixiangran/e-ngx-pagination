import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EssenceNg2PaginationModule} from "../../src/essence-ng2-pagination.module";

@NgModule({
    imports: [
        BrowserModule,
		EssenceNg2PaginationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
