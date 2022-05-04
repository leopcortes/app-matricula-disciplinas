import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfertaSearchTurmaPage } from './oferta-search-turma';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OfertaSearchTurmaPage,
  ],
  imports: [
    IonicPageModule.forChild(OfertaSearchTurmaPage),
    TranslateModule.forChild()
  ],
})
export class OfertaSearchTurmaPageModule {}
