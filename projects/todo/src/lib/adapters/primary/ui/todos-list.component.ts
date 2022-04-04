import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoQuery } from '../../../application/ports/primary/todo.query';
import { GETS_ALL_TODO_QUERY, GetsAllTodoQueryPort } from '../../../application/ports/primary/gets-all-todo.query-port';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_TODO_DTO } from '../../../application/ports/secondary/adds-todo.dto-port';
import { CreateTodoCommandPort, CREATE_TODO_COMMAND } from '../../../application/ports/primary/create-todo.command-port';
import { CreateTodoCommand } from '../../../application/ports/primary/create-todo.command';
import { LoadTodosCommandPort, LOAD_TODOS_COMMAND } from '../../../application/ports/primary/load-todos.command-port';
import { LoadTodosCommand } from '../../../application/ports/primary/load-todos.command';
import { SetItemCompletedStatusCommandPort, SET_ITEM_COMPLETED_STATUS_COMMAND } from '../../../application/ports/primary/set-item-completed-status.command-port';

@Component({ 
  selector: 'lib-todos-list', 
  templateUrl: './todos-list.component.html', 
  styleUrls: ['./todos-list.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TodosListComponent {
  todos$: Observable<TodoQuery[]> = this._getsAllTodoQuery.getAllTodoQuery();
  isItemBeingAdded = false;
  readonly newTodoForm: FormGroup = new FormGroup({content: new FormControl()});

  constructor(
    @Inject(GETS_ALL_TODO_QUERY) private _getsAllTodoQuery: GetsAllTodoQueryPort,
    @Inject(LOAD_TODOS_COMMAND) private _loadTodosCommand: LoadTodosCommandPort,
    @Inject(CREATE_TODO_COMMAND) private _createsTodoCommand: CreateTodoCommandPort,
    @Inject(SET_ITEM_COMPLETED_STATUS_COMMAND) private _setsItemCompletedStatusCommand: SetItemCompletedStatusCommandPort,
  ) {
    _loadTodosCommand.loadTodos(null);
  }

  onTaskAdded(): void {
    const contentControl = this.newTodoForm.get('content');
    this._createsTodoCommand.createTodo({ content: contentControl.value });
    contentControl.patchValue(null);
  }

  toggleItem(itemId: number, completed: boolean): void {
    this._setsItemCompletedStatusCommand.setItemCompletedStatus({
      id: itemId,
      completed: completed,
    });
  }
}
