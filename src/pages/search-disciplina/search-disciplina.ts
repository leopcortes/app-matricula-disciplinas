import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Disciplina } from '../../models/disciplina';
import { DisciplinaProvider } from '../../providers';

/**
 * Generated class for the SearchDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-disciplina',
  templateUrl: 'search-disciplina.html',
})
export class SearchDisciplinaPage {

  currentDisciplinas: Disciplina[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public disciplinaProvider: DisciplinaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchDisciplinaPage');
  }

  pesquisaDisciplina(disciplina)
  {
    let val = disciplina.target.value;
    if (!val || !val.trim()) {
      this.currentDisciplinas = [];
      return;
    }
    this.currentDisciplinas = this.disciplinaProvider.search({
      nome: val
    });
  }

  abrirTurmas(disciplina: Disciplina)
  {
    this.navCtrl.push('OfertaSearchTurmaPage', {disciplina: disciplina});
  }
}
