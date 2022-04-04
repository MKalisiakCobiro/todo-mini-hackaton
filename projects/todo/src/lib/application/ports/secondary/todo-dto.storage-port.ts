import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { TodoDTO } from "./todo.dto";

export const TODO_DTO_STORAGE = new InjectionToken<TodoDtoStoragePort>('TODO_DTO_STORAGE');

export interface TodoDtoStoragePort {
  next(state: TodoDTO[]): void;
  asObservable(): Observable<TodoDTO[]>;
}