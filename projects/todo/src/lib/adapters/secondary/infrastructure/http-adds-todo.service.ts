import { Inject, Injectable } from '@angular/core';
import { TodoistApi } from '@doist/todoist-api-typescript';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TODOIST_API } from 'src/app/todoist-api.token';
import { AddsTodoDtoPort } from '../../../application/ports/secondary/adds-todo.dto-port';
import { TodoDTO } from '../../../application/ports/secondary/todo.dto';

@Injectable()
export class HttpAddsTodoService implements AddsTodoDtoPort {
  constructor(
    @Inject(TODOIST_API) private readonly api: TodoistApi
  ) {
  }

  add(todo: Pick<TodoDTO, 'content'>): Observable<TodoDTO> {
    return from(this.api.addTask(todo)).pipe(map(
      todoistTodo => ({
        id: todoistTodo.id,
        content: todoistTodo.content,
        completed: todoistTodo.completed
      })
    ));
  }
}
