import { InjectionToken } from '@angular/core';
import { TodoDTO } from './todo.dto';

export const SETS_TODO_STATUS_DTO = new InjectionToken<SetsTodoStatusDtoPort>('SETS_TODO_DTO');

export interface SetsTodoStatusDtoPort {
  set(todo: Pick<TodoDTO, 'id' | 'completed'>): void;
}
