import { InjectionToken } from '@angular/core';
import { LoadTodosCommand } from './load-todos.command';

export const LOAD_TODOS_COMMAND = new InjectionToken<LoadTodosCommandPort>('LOAD_TODOS_COMMAND');

export interface LoadTodosCommandPort {
  loadTodos(command: LoadTodosCommand): void;
}
