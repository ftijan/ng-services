import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    log(message: string): void {
        const timestamp: string = new Date().toLocaleTimeString();
        console.log(`${message} (${timestamp})`);
    }

    error(message: string): void {
        console.error(`ERROR: ${message}`);
    }
    
}