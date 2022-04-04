import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosListComponent } from './todos-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgVarDirectiveModule } from './ng-var.directive-module';

@NgModule({ 
	imports: [CommonModule, ReactiveFormsModule, NgVarDirectiveModule],
  	declarations: [TodosListComponent],
  	providers: [],
  	exports: [TodosListComponent] })
export class TodosListComponentModule {
}
