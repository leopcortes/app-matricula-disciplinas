import { Component } from '@angular/core';
import { AlunoProvider } from '../../providers';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  account: { matricula: string, password: string } = {
    matricula: '180012345',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public navCtrl: NavController,
    public alunoProvider: AlunoProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doLogin() {
    var aluno = this.alunoProvider.get(this.account.matricula);
    if(aluno != undefined) {
      console.log(aluno);
      this.alunoProvider.set(aluno);
      this.navCtrl.push(MainPage);
    }  
    else {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

    /*
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
*/
  }
}
