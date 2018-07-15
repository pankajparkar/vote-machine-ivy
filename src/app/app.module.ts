import { 
  NgModule, Injector, Compiler, ɵrenderComponent as renderComponent,
  enableProdMode, ɵComponentType as ComponentType, createInjector, defineInjector, NgModuleRef, StaticProvider } from '@angular/core';
import { createCustomElement } from '@angular/elements';
// import { ComponentFactoryResolver as viewEngine_ComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';
// import { ComponentFactoryResolver } from '@angular/core/src/render3/component_ref';
import { CommonModule } from '@angular/common' 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VoteComponent } from './vote/vote.component';

// export const COMPONENT_FACTORY_RESOLVER: StaticProvider = {
//   provide: viewEngine_ComponentFactoryResolver,
//   useFactory: () => new ComponentFactoryResolver(),
//   deps: [],
// };
// const additionalProviders: StaticProvider[] = [
//   COMPONENT_FACTORY_RESOLVER, {
//     provide: viewEngine_ComponentFactoryResolver,
//     useValue: this,
//   }
// ];

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    //CommonModule
    //BrowserModule
  ],
  bootstrap: [VoteComponent],
  entryComponents: [VoteComponent],
})
export class AppModule { 
  constructor(){
    // const customElement = createCustomElement(VoteComponent, { injector });
    // customElements.define('vote-cmp', customElement);
  }
  // static ngInjectorDef = defineInjector({
  //   factory: () => new AppModule(),
  //   providers: [],
  //   imports: []
  // });
  ngDoBootstrap(app){
    console.log(app)
  }
}
//prod mode enabled
enableProdMode();
let injector = Injector.create([])
// let _compiler = injector.get(Compiler);
// let appModule = _compiler.compileModuleAndAllComponentsAsync(AppModule);
renderComponent(VoteComponent, {injector});
// console.log("outside injector", injector)
// window['injector']= injector;
// debugger
// export function bootstrapRootComponent(injector) {
//   // app.bootstrap(VoteComponent);
//   // renderComponent(VoteComponent, {injector: app});
//   console.log("bootstrapRootComponent", injector)
  // const customElement = createCustomElement(VoteComponent, { injector: injector});
//   customElements.define('vote-cmp', customElement);
  
// }

// bootstrapRootComponent(injector)