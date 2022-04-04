import { Injectable, Inject } from '@angular/core';
import { GETS_ALL_TODO_DTO, GetsAllTodoDtoPort } from '../ports/secondary/gets-all-todo.dto-port';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GetsAllTodoQueryPort } from '../ports/primary/gets-all-todo.query-port';
import { TodoQuery } from '../ports/primary/todo.query';
import { TODO_DTO_STORAGE, TodoDtoStoragePort } from '../ports/secondary/todo-dto.storage-port';
import { LoadTodosCommandPort } from '../ports/primary/load-todos.command-port';
import { LoadTodosCommand } from '../ports/primary/load-todos.command';
import { TodoDTO } from '../ports/secondary/todo.dto';
import { ADDS_TODO_DTO, AddsTodoDtoPort } from '../ports/secondary/adds-todo.dto-port';
import { CreateTodoCommandPort } from '../ports/primary/create-todo.command-port';
import { CreateTodoCommand } from '../ports/primary/create-todo.command';
import { SETS_TODO_STATUS_DTO, SetsTodoStatusDtoPort } from '../ports/secondary/sets-todo-status.dto-port';
import { SetItemCompletedStatusCommandPort } from '../ports/primary/set-item-completed-status.command-port';
import { SetItemCompletedStatusCommand } from '../ports/primary/set-item-completed-status.command';

@Injectable()
export class TodosState implements GetsAllTodoQueryPort, LoadTodosCommandPort, CreateTodoCommandPort, SetItemCompletedStatusCommandPort {
  constructor(
      @Inject(GETS_ALL_TODO_DTO) private _getsAllTodoDto: GetsAllTodoDtoPort, 
      @Inject(TODO_DTO_STORAGE) private _todoDtoStorage: TodoDtoStoragePort, 
      @Inject(ADDS_TODO_DTO) private _addsTodoDto: AddsTodoDtoPort, 
      @Inject(SETS_TODO_STATUS_DTO) private _setsTodoStatusDto: SetsTodoStatusDtoPort
  ) {
  }

  getAllTodoQuery(): Observable<TodoQuery[]> {
    return this._todoDtoStorage.asObservable().pipe(map(dtos => dtos.map(dto => TodoQuery.from(dto))));
  }

  loadTodos(command: LoadTodosCommand): void {
    this._getsAllTodoDto.getAll().subscribe((dtos: TodoDTO[]) => this._todoDtoStorage.next(dtos));
  }

  createTodo(command: CreateTodoCommand): void {
    this._addsTodoDto.add({content: command.content}).pipe(take(1)).subscribe({
        next: () => {
            this.loadTodos(null);
        }
    });
  }

  setItemCompletedStatus(command: SetItemCompletedStatusCommand): void {
    this._setsTodoStatusDto.set(command);
  }
}
