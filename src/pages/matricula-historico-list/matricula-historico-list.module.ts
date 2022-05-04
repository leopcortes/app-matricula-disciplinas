import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatriculaHistoricoListPage } from './matricula-historico-list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MatriculaHistoricoListPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaHistoricoListPage),
    TranslateModule.forChild()
  ],
})
export class MatriculaHistoricoListPageModule {}
