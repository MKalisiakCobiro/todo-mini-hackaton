import { NgModule } from '@angular/core';
import { TodosState } from './todos.state';
import { GETS_ALL_TODO_QUERY } from '../ports/primary/gets-all-todo.query-port';
import { LOAD_TODOS_COMMAND } from '../ports/primary/load-todos.command-port';
import { CREATE_TODO_COMMAND } from '../ports/primary/create-todo.command-port';
import { SET_ITEM_COMPLETED_STATUS_COMMAND } from '../ports/primary/set-item-completed-status.command-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [TodosState, { provide: GETS_ALL_TODO_QUERY, useExisting: TodosState }, { provide: GETS_ALL_TODO_QUERY, useExisting: TodosState }, { provide: GETS_ALL_TODO_QUERY, useExisting: TodosState }, { provide: LOAD_TODOS_COMMAND, useExisting: TodosState }, { provide: CREATE_TODO_COMMAND, useExisting: TodosState }, { provide: SET_ITEM_COMPLETED_STATUS_COMMAND, useExisting: TodosState }],
  	exports: [] })
export class TodosStateModule {
}
