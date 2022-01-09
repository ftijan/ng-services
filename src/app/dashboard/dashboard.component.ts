import { Component, OnInit } from '@angular/core';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
    private dataService: DataService) { 
    //this.loggerService.log('Creating the dashboard.');
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders().subscribe(
      (data: Reader[] | BookTrackerError) => this.allReaders = <Reader[]>data,
      (err: BookTrackerError) => this.loggerService.error(err.friendlyMessage),
      () => this.loggerService.log(`Function: getAllReaders() done.`)
    );    
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.dataService.getAuthorRecommendation(1)
      .then(
        (author: string) => {
          this.loggerService.log(author);
          // Uncomment to simulate an error:
          //throw new Error('There was a problem!');
        },
        (err: string) => this.loggerService.error(`Promise rejected: ${err}`)
      ).catch((error: Error) => this.loggerService.error(error.message));
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
