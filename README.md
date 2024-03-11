# IonicPeliculas


Instalaciones necesarias:

@capacitor/splash-screen
The Splash Screen API provides methods for showing or hiding a Splash image.

Install
npm install @capacitor/splash-screen
npx cap sync


@capacitor/status-bar
The StatusBar API Provides methods for configuring the style of the Status Bar, along with showing or hiding it.

Install
npm install @capacitor/status-bar
npx cap sync


Ionic Storage
A simple key-value Storage module for Ionic apps. This utility uses the best storage engine available on the platform without having to interact with it directly (some configuration required, see docs below).

As of 3.x, this library now supports any JavaScript project (old versions only supported Angular), and Angular-specific functionality has been moved to a new @ionic/storage-angular package.

Out of the box, Ionic Storage will use IndexedDB and localstorage where available. To use SQLite for native storage, see the SQLite Installation instructions.

For teams building security sensitive applications requiring encryption, 3.x now supports encryption through Ionic Secure Storage, see Encryption Support for instructions on using it.

Installation
npm install @ionic/storage
npm install --save @ionic/storage-angular

Swiper.js
npm install swiper@latest

Next, we need to add the CUSTOM_ELEMENTS_SCHEMA, which tells Angular that we will be using custom elements. This can be done in either app.module.ts, or the module file for the component where you will be using Swiper.

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...

Finally, we need to call Swiper's register function to globally register Swiper's custom elements. This should only be done once, so place it in app.component.ts.

import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
