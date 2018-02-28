import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ATo4Pipe } from './a-to4.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ATo4Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
