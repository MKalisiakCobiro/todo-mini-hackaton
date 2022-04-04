import { NgModule } from '@angular/core';
import { TODO_DTO_STORAGE } from '../../../application/ports/secondary/todo-dto.storage-port';
import { InMemoryTodoStorage } from './in-memory-todo.storage';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTodoStorage, { provide: TODO_DTO_STORAGE, useExisting: InMemoryTodoStorage }],
  	exports: [] })
export class InMemoryTodoStorageModule {
}
