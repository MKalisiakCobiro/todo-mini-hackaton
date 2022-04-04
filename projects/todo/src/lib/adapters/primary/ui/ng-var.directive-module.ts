import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgVarDirective } from './ng-var.directive';

@NgModule({ imports: [CommonModule],
  	declarations: [NgVarDirective],
  	providers: [],
  	exports: [NgVarDirective] })
export class NgVarDirectiveModule {
}
