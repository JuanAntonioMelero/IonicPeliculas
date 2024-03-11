import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {

      SplashScreen.hide();
      const setStatusBarStyleDark = async () => {
        await StatusBar.setStyle({ style: Style.Dark });
      };

    });
  }
}
