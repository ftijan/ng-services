import { LoggerService } from "./logger.service";
import { DataService } from "./data.service";

export function dataServiceFactory(logger: LoggerService) {
    let dataService: DataService = new DataService(logger);

    // do more config logic if necessary...

    logger.log('Creating with factory function');

    return dataService;
}