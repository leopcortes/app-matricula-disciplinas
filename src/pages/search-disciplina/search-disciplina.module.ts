import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDisciplinaPage } from './search-disciplina';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SearchDisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDisciplinaPage),
    TranslateModule.forChild()
  ],
})
export class SearchDisciplinaPageModule {}
