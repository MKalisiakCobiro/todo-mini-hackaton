import { Inject, Injectable } from '@angular/core';
import { TodoistApi } from '@doist/todoist-api-typescript';
import { filterByCriterion } from '@lowgular/shared';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TODOIST_API } from 'src/app/todoist-api.token';
import { GetsAllTodoDtoPort } from '../../../application/ports/secondary/gets-all-todo.dto-port';
import { TodoDTO } from '../../../application/ports/secondary/todo.dto';

@Injectable()
export class HttpGetsAllTodoService implements GetsAllTodoDtoPort {
  constructor(
    @Inject(TODOIST_API) private readonly api: TodoistApi
  ) {
  }

  getAll(criterion: Partial<TodoDTO>): Observable<TodoDTO[]> {
    return from(this.api.getTasks()).pipe(map(data => filterByCriterion(data, criterion)));
  }
}
