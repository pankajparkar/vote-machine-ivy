import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [VoteComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    const customElement = createCustomElement(VoteComponent, { injector });
    customElements.define('vm-vote', customElement);
  }

  ngDoBootstrap(){
  }
}
