import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CameraPage } from './camera';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
    TranslateModule.forChild()
  ],
  exports: [
    CameraPage
  ]
})
export class CameraPageModule { }