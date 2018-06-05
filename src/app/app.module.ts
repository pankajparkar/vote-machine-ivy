//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type, ɵrenderComponent as renderComponent, enableProdMode, ɵComponentType as ComponentType, createInjector } from '@angular/core';
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
    // const customElement = createCustomElement(VoteComponent, { injector });
    // customElements.define('vote-cmp', customElement);
  }

  ngDoBootstrap(app){
    console.log(app)
  }
}
//prod mode enabled
//enableProdMode();
debugger
let injector = createInjector(AppModule);
renderComponent(VoteComponent, {
  injector: injector
});
console.log(injector)
debugger
export function bootstrapRootComponent(injector) {
  // app.bootstrap(VoteComponent);
  // renderComponent(VoteComponent, {injector: app});
  console.log(injector)
  const customElement = createCustomElement(VoteComponent, { injector});
  customElements.define('vote-cmp', customElement);
  
}

//bootstrapRootComponent(injector)