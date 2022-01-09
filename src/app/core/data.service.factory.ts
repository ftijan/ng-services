import { LoggerService } from "./logger.service";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

export function dataServiceFactory(logger: LoggerService, http: HttpClient) {
    let dataService: DataService = new DataService(logger, http);

    // do more config logic if necessary...

    logger.log('Creating with factory function');

    return dataService;
}