import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { routes } from './routes';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { AuthGetService } from './services/auth-get.service';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
