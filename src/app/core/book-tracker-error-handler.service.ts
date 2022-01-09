import { Injectable, ErrorHandler } from '@angular/core';
import { BookTrackerError } from 'app/models/bookTrackerError';

@Injectable()
export class BookTrackerErrorHandlerService implements ErrorHandler{

  constructor() { }

  handleError(error: any): void {
    // custom error handler example:
    const customError: BookTrackerError = {
      errorNumber: 200,
      message: (<Error>error).message,
      friendlyMessage: 'An error occurred. Please try again.'
    }

    console.error('Book Tracker Error Handler Service:', customError);
  }
}
