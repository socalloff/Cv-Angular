import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports : [
    MainContentComponent
  ]
})
export class MainContentModule { }
