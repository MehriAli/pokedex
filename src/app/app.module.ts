import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NotFoundInterceptor} from "./not-found.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonDetailComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NotFoundInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
