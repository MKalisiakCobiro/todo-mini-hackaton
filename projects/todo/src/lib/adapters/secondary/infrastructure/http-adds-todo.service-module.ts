import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpAddsTodoService } from './http-adds-todo.service';
import { ADDS_TODO_DTO } from '../../../application/ports/secondary/adds-todo.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpAddsTodoService, { provide: ADDS_TODO_DTO, useExisting: HttpAddsTodoService }],
  	exports: [] })
export class HttpAddsTodoServiceModule {
}
