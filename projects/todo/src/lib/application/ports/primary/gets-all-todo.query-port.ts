import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoQuery } from './todo.query';

export const GETS_ALL_TODO_QUERY = new InjectionToken<GetsAllTodoQueryPort>('GETS_ALL_TODO_QUERY');

export interface GetsAllTodoQueryPort {
  getAllTodoQuery(): Observable<TodoQuery[]>;
}
