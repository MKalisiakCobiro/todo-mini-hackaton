import { InjectionToken } from '@angular/core';
import { CreateTodoCommand } from './create-todo.command';

export const CREATE_TODO_COMMAND = new InjectionToken<CreateTodoCommandPort>('CREATE_TODO_COMMAND');

export interface CreateTodoCommandPort {
  createTodo(command: CreateTodoCommand): void;
}
