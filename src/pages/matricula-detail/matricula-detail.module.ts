import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatriculaDetailPage } from './matricula-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MatriculaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaDetailPage),
    TranslateModule.forChild()
  ],
})
export class MatriculaDetailPageModule {}
