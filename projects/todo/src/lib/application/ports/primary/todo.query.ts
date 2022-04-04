import { TodoDTO } from "../secondary/todo.dto";

export class TodoQuery {
  constructor(public readonly id: number, public readonly content: string, public readonly completed: boolean) {
  }

  public static from(dto: TodoDTO): TodoQuery {
    return new TodoQuery(dto.id, dto.content, dto.completed);
  }
}
