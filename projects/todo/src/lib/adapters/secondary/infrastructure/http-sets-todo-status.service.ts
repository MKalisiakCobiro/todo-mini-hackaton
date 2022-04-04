import { Inject, Injectable } from '@angular/core';
import { TodoistApi } from '@doist/todoist-api-typescript';
import { TODOIST_API } from 'src/app/todoist-api.token';
import { SetsTodoStatusDtoPort } from '../../../application/ports/secondary/sets-todo-status.dto-port';
import { TodoDTO } from '../../../application/ports/secondary/todo.dto';

@Injectable()
export class HttpSetsTodoStatusService implements SetsTodoStatusDtoPort {
  constructor(
    @Inject(TODOIST_API) private readonly api: TodoistApi
  ) {
  }

  set(todo: Pick<TodoDTO, 'id' | 'completed'>): void {
    if (todo.completed) {
      this.api.closeTask(todo.id);
    } else {
      this.api.reopenTask(todo.id);
    }
  }
}
