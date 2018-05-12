import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [VoteComponent],
})
export class AppModule { 
  constructor(private injector: Injector){
    const customElement = createCustomElement(VoteComponent, { injector: this.injector });
    customElements.define('vote-cmp', customElement);
  }

  ngDoBootstrap(){
  }
}
