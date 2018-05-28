//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type, ɵrenderComponent as renderComponent, enableProdMode, ɵComponentType as ComponentType } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    //BrowserModule
  ],
  entryComponents: [VoteComponent],
})
export class AppModule { 
  constructor(private injector: Injector){
    debugger
    const customElement = createCustomElement(VoteComponent, { injector: this.injector });
    customElements.define('vote-cmp', customElement);
  }

  ngDoBootstrap(app){
    console.log(app)
  }
}
//prod mode enabled
enableProdMode();

//renderComponent(VoteComponent);

function bootstrapRootComponent(app, name) {
  app.bootstrap(VoteComponent);
}