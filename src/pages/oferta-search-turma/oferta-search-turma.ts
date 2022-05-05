import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Disciplina } from '../../models/disciplina';
import { TurmaProvider,  MatriculaProvider } from '../../providers';
import { Turma } from '../../models/turma';
import { Matricula } from '../../models/matricula';
import { TranslateService } from '@ngx-translate/core'

export interface AlertMetadata {
  title: string;
  description: string;
  descriptionDetails: string;
  inputName: string;
  okButton: string;
  cancelButton: string;
}

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
  alertaConfirmarTurma: AlertMetadata;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              translate: TranslateService,
              private alertCtrl: AlertController,
              public matriculaProvider: MatriculaProvider,
              public turmaProvider: TurmaProvider) 
              {
    this.disciplina = navParams.get('disciplina');
    this.currentTurmas = this.turmaProvider.search({ disciplina: this.disciplina.codigo });

    translate.get(["ADICIONAR_TURMA_TITLE",
      "ADICIONAR_TURMA_DESCRIPTION",
      "ADICIONAR_TURMA_INPUTNAME",
      "CANCEL_BUTTON",
      "CONFIRM_BUTTON"
    ]).subscribe(
      (values) => {
        this.alertaConfirmarTurma = {
          title: values.ADICIONAR_TURMA_TITLE,
          description: values.ADICIONAR_TURMA_DESCRIPTION,
          descriptionDetails: '',
          inputName: values.ADICIONAR_TURMA_INPUTNAME,
          okButton: values.CONFIRM_BUTTON,
          cancelButton: values.CANCEL_BUTTON
        };
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertaSearchTurmaPage');
  }

  inserirMatricula(turma: Turma, status: string, prioridade?: number){
    var matricula: Matricula = {
      turma: turma
    };

    if(typeof prioridade !== 'undefined'){
      matricula.prioridade = prioridade;
    }
    this.matriculaProvider.add(matricula);
  }

  adicionarTurma(turma: Turma){
    let prompt = this.alertCtrl.create({
      title: this.alertaConfirmarTurma.title,
      message: this.alertaConfirmarTurma.description,
      inputs: [
        {
          name: 'prioridade',
          placeholder: this.alertaConfirmarTurma.inputName
        },
      ],
      buttons: [
        {
          text: this.alertaConfirmarTurma.cancelButton,
            // handler: data => {
            //   alert('Cancelado');
            // }
        },
        {
          text: this.alertaConfirmarTurma.okButton,
          handler: data => {
            this.inserirMatricula(turma,'Pedido',parseInt(data.prioridade))
          }
        }
      ]
    });
    prompt.present();
  }
}



