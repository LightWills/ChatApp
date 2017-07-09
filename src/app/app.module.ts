import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import   {   MyApp } from './app.component';
import   {   AngularFireAuth   }   from   'angularfire2/auth' ; 
import   {   AngularFireModule   }   from   'angularfire2' ; 
import   {   config  }  from  './app.firebaseconfig' ; 
 
 
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,LoginPage
    //HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,LoginPage
  //  HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,AngularFireAuth,
    UserProvider
  ]
})
export class AppModule {}
