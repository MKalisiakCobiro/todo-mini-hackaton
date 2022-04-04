import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDTO } from './todo.dto';

export const ADDS_TODO_DTO = new InjectionToken<AddsTodoDtoPort>('ADDS_TODO_DTO');

export interface AddsTodoDtoPort {
  add(todo: Pick<TodoDTO, 'content'>): Observable<TodoDTO>;
}
