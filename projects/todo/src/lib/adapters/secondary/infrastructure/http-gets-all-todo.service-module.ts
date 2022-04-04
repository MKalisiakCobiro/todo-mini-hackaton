import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpGetsAllTodoService } from './http-gets-all-todo.service';
import { GETS_ALL_TODO_DTO } from '../../../application/ports/secondary/gets-all-todo.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpGetsAllTodoService, { provide: GETS_ALL_TODO_DTO, useExisting: HttpGetsAllTodoService }],
  	exports: [] })
export class HttpGetsAllTodoServiceModule {
}
