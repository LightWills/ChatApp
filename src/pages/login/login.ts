import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {usercreds} from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';

import   {   AngularFireAuth   }   from   'angularfire2/auth' ; 
//import { LabsPage } from '../../pages/labs/labs';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 credantials  = {} as usercreds;



  constructor(
    public navCtrl: NavController, public navParams: NavParams, public authservice : AuthProvider, public tampo : AngularFireAuth) {
this.authservice = new AuthProvider(this.tampo); 

this.credantials  = {} as usercreds;

console.log(this.credantials);

}


async correctMe(){
  console.log(this.credantials);
}

async signin() {

    this.authservice.login(this.credantials).then((res: any) => {
      if (res)
        this.navCtrl.setRoot('LabsPage', this.navParams );     
     else
        alert(res);
    })
  }

  passwordreset() {
  }
   
  signup() {
    this.navCtrl.setRoot('SignupPage', this.navParams);
  }


mysing(){
  
}
}