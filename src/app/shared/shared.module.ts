import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import {CatDirective} from "./directives/cat.directive";



@NgModule({
  declarations: [
    HighlightDirective,
    CatDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, CatDirective]
})
export class SharedModule { }
