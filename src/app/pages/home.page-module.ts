import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TodosListComponentModule } from '../../../projects/todo/src/lib/adapters/primary/ui/todos-list.component-module';
import { HttpGetsAllTodoServiceModule } from '../../../projects/todo/src/lib/adapters/secondary/infrastructure/http-gets-all-todo.service-module';
import { TodosStateModule } from '../../../projects/todo/src/lib/application/state/todos.state-module';
import { InMemoryTodoStorageModule } from 'projects/todo/src/lib/adapters/secondary/infrastructure/in-memory-todo.storage-module';
import { HttpAddsTodoServiceModule } from 'projects/todo/src/lib/adapters/secondary/infrastructure/http-adds-todo.service-module';
import { HttpSetsTodoStatusServiceModule } from 'projects/todo/src/lib/adapters/secondary/infrastructure/http-sets-todo-status.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  TodosListComponentModule,
  HttpGetsAllTodoServiceModule,
  HttpAddsTodoServiceModule,
  InMemoryTodoStorageModule,
  HttpSetsTodoStatusServiceModule,
  TodosStateModule,
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
