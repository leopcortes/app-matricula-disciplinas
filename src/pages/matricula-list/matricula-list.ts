import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { Matricula } from '../../models/matricula';
import { MatriculaProvider, AlunoProvider } from '../../providers';


/**
 * Generated class for the MatriculaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricula-list',
  templateUrl: 'matricula-list.html',
})
export class MatriculaListPage {

  currentMatriculas: Matricula[];
  currentAluno: Aluno;
  currentMatriculaConfirmada: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alunoProvider: AlunoProvider, 
    public matriculaProvider: MatriculaProvider, 
  ) {
    this.currentAluno = this.alunoProvider.get();
    this.currentMatriculas = this.matriculaProvider.search();
    this.currentMatriculaConfirmada = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatriculaListPage');
  }

  openMatricula(matricula: Matricula) {
    this.navCtrl.push('MatriculaDetailPage', {
      matricula: matricula
    });
  }

  confirmarMatricula() {
    this.matriculaProvider.confirmarMatricula();
    for(let i = 0; i < this.currentMatriculas.length; i++)
    {
      if(this.currentMatriculas[i].status != "PreMatricula")
      {
        this.currentMatriculaConfirmada = true;
      }
    }
  }

}
