import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Disciplina } from '../../models/disciplina';
import { TurmaProvider } from '../../providers';
import { Turma } from '../../models/turma';

/**
 * Generated class for the OfertaSearchTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oferta-search-turma',
  templateUrl: 'oferta-search-turma.html',
})
export class OfertaSearchTurmaPage {

  disciplina: Disciplina;
  currentTurmas: Turma[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public turmaProvider: TurmaProvider) {
    this.disciplina = navParams.get('disciplina');
    this.currentTurmas = this.turmaProvider.search({ disciplina: this.disciplina.codigo });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertaSearchTurmaPage');
  }
}


