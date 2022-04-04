import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { TodoDTO } from '../../../application/ports/secondary/todo.dto';
import { TodoDtoStoragePort } from '../../../application/ports/secondary/todo-dto.storage-port';

@Injectable()
export class InMemoryTodoStorage extends ReplaySubject<TodoDTO[]> implements TodoDtoStoragePort {
    constructor() {
        super();
    }
}
