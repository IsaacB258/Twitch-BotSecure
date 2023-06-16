import {LogTypes} from "../data/LogData.ts";
import {DateAndTime} from "../data/DateAndTime.ts";

class Logger {

    private verbosity: LogTypes;
    constructor(verbosity: LogTypes = LogTypes.info) {
        this.verbosity = verbosity;

    }

    private log(level: LogTypes, message: string):void {
        if(this.verbosity >= level){
            console.log(`[|${LogTypes[level].toUpperCase()}] ${DateAndTime} : ${message} `);
        }
    }

    public info(message: string): void{
        this.log(LogTypes.info, message);
    }

    public debug(message: string): void{
        this.log(LogTypes.debug, message);
    }

    public verbose(message: string): void{
        this.log(LogTypes.verbose, message);
    }

    public warn(message: string): void{
        this.log(LogTypes.warn, message);
    }

    public error(message: string): void{
        this.log(LogTypes.error, message);
    }
}

export default Logger;