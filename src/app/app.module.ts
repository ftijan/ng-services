import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // alternate providers DI syntax:
  // providers: [
  //  DataService,
  //   { provide: LoggerService, useClass: LoggerService}, 
  //   { provide: LoggerService, useClass: InheritedLoggerService} 
  // OR with useExisting:
  //  InheritedLoggerService,
  //   { provide: LoggerService, useExisting: InheritedLoggerService} 
  // ],
  // OR with ad-hoc logic replacement:
  // { provide: LoggerService, useValue: {
  //   log: (message: string) => console.log(message),
  //   error: (message: string) => console.error(message)
  // }}
  // OR with a factory function:
  // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService] },
  bootstrap: [AppComponent]
})
export class AppModule { }
