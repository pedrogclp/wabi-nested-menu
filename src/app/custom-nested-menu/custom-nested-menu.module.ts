import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNestedMenuComponent } from './custom-nested-menu.component';

/* Material imports */
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    CustomNestedMenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    CustomNestedMenuComponent
  ]
})
export class CustomNestedMenuModule { }
