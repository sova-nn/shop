import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import {CatDirective} from "./directives/cat.directive";
import {OrderByPipe} from "./pipes/order-by.pipe";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HighlightDirective,
    CatDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    CatDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
