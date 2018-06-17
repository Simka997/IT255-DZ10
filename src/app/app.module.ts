import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {OnamaComponent} from './pages/onama/onama.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OnamaComponent,
    PocetnaComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
