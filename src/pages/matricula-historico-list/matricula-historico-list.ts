import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { Matricula } from '../../models/matricula';
import { MatriculaProvider, AlunoProvider } from '../../providers';

/**
 * Generated class for the MatriculaHistoricoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricula-historico-list',
  templateUrl: 'matricula-historico-list.html',
})
export class MatriculaHistoricoListPage {

  currentMatriculasHistorico: Matricula[];
  currentAluno: Aluno;
  constructor(public navCtrl: NavController, public matriculaProvider: MatriculaProvider, public navParams: NavParams, public alunoProvider: AlunoProvider) 
  {
    this.currentMatriculasHistorico = this.matriculaProvider.searchHistorico();
    this.currentAluno = this.alunoProvider.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatriculaHistoricoListPage');
  }

}
