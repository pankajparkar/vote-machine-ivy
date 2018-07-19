import { 
  NgModule, Injector, Compiler, ɵrenderComponent as renderComponent, ComponentFactoryResolver,
  enableProdMode, ɵComponentType as ComponentType, createInjector, defineInjector, NgModuleRef, StaticProvider, Inject } from '@angular/core';
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
(CommonModule as any).ngInjectorDef = defineInjector({factory: () => new CommonModule});
@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [VoteComponent],
  entryComponents: [VoteComponent],
})
export class AppModule { 
  constructor(){
  }
  ngDoBootstrap(app){
    console.log(app)
  }
}
//prod mode enabled
enableProdMode();
let injector = createInjector(AppModule);
let component = renderComponent(VoteComponent, {injector});
console.log(component)