import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDTO } from './todo.dto';

export const GETS_ALL_TODO_DTO = new InjectionToken<GetsAllTodoDtoPort>('GETS_ALL_TODO_DTO');

export interface GetsAllTodoDtoPort {
  getAll(criterion?: Partial<TodoDTO>): Observable<TodoDTO[]>;
}
