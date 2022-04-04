import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoistApi } from '@doist/todoist-api-typescript';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TODOIST_API } from './todoist-api.token';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: TODOIST_API,
      useValue: new TodoistApi(environment.TODOIST_API_TOKEN),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
