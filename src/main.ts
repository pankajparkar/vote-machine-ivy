import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, bootstrapRootComponent } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// let platform = platformBrowserDynamic();
// console.log("platform ", platform);

//bootstrapRootComponent(platform, '');
//let b = platform.bootstrapModule(AppModule);
//console.log("bootstrap", b);
//   .catch(err => console.log(err));

//renderComponent(VoteComponent);
