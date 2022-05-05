import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Matricula } from '../../models/matricula';
import { MatriculaProvider } from '../../providers';

/**
 * Generated class for the MatriculaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricula-detail',
  templateUrl: 'matricula-detail.html',
})
export class MatriculaDetailPage {

  matricula: Matricula;

  constructor(public navCtrl: NavController, public navParams: NavParams, public matriculaProvider: MatriculaProvider) {
    this.matricula = navParams.get('matricula');

    console.log(this.matricula);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatriculaDetailPage');
  }

    /**
   * Alterar o Status da matrícula na turma.
   */
     alterarStatus(status: string) {
      this.matricula.status = status;
      this.navCtrl.pop();
    }

    excluir(){
      this.matriculaProvider.delete(this.matricula);
      this.navCtrl.pop();
    }
}
