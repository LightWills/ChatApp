import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-labs',
  templateUrl: 'labs.html',
})
export class LabsPage {
tab1 :   string   =   "ChatPage" ; 
   tab2 :   string   =   "GroupsPage" ; 
   tab3 :   string   =   "ProfilePage" ; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabsPage');
  }

}
