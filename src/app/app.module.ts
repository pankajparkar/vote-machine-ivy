//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type, ɵrenderComponent as renderComponent, enableProdMode, ɵComponentType as ComponentType, createInjector, defineInjector } from '@angular/core';
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
  constructor(){
    // const customElement = createCustomElement(VoteComponent, { injector });
    // customElements.define('vote-cmp', customElement);
  }
  static ngInjectorDef = defineInjector({
    factory: () => new AppModule(),
    providers: [],
  });
  ngDoBootstrap(app){
    console.log(app)
  }
}
//prod mode enabled
enableProdMode();

let injector = createInjector(AppModule);
renderComponent(VoteComponent, {
  injector: injector
});
console.log("outside injector", injector)
debugger
export function bootstrapRootComponent(injector) {
  // app.bootstrap(VoteComponent);
  // renderComponent(VoteComponent, {injector: app});
  console.log("bootstrapRootComponent", injector)
  const customElement = createCustomElement(VoteComponent, { injector});
  customElements.define('vote-cmp', customElement);
  
}

bootstrapRootComponent(injector)