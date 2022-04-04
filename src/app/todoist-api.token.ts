import { InjectionToken } from "@angular/core";
import { TodoistApi } from "@doist/todoist-api-typescript";

export const TODOIST_API = new InjectionToken<TodoistApi>('TODOIST_API');
