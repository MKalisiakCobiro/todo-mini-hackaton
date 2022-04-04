import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpSetsTodoStatusService } from './http-sets-todo-status.service';
import { SETS_TODO_STATUS_DTO } from '../../../application/ports/secondary/sets-todo-status.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpSetsTodoStatusService, { provide: SETS_TODO_STATUS_DTO, useExisting: HttpSetsTodoStatusService }],
  	exports: [] })
export class HttpSetsTodoStatusServiceModule {
}
