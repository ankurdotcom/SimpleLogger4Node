"use strict"

/**
 * The `logger` is simple module enables to logging based on 
 * different LOG levels.
 *
 *
 * ```js
 * const LOG = require("Logger");
 * ```
 * import { LOG, WARN, ERROR } from 'Logger';
 * ```
 * 
 * OR
 * 
 * ```
 * import * as LOGGER from 'Logger';
 * ```
 * All file system operations have synchronous, callback, and promise-based
 * forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).
 * @see [source](https://github.com/GTM-Software/fleet-dashboard.git)
 */

const fs = require("fs");

const LOGLEVEL = {
    "INFO" : "INFO",
    "WARN" : "WARN",
    "ERROR" : "ERROR",
};

const properties = {
    "logFileName" : "log",
    "dateFormatString" : "",
    "formatedDate" : new Date(),
};

const setLogFileName = (logFileName) => {
  //TODO   
}

const setDateFormat = (dateFormatString) => {
    //TODO 
}

const print = (LOGLEVEL, logMessage) => {
    
    const logMsg = `[${LOGLEVEL}]:${properties.formatedDate}:${logMessage}\n`;

    fs.mkdir('./logs', { recursive: true }, (err) => {
        if (err) throw err;
    });

    const logFileName = `logs/${properties.logFileName}.log`;
        
    fs.appendFile(logFileName, logMsg, (err, data) => {
            if(err) {
                throw console.error(`Error in Logging => ${err}`);
            }
    });
}

const INFO = (logMessage) => print(LOGLEVEL.INFO,logMessage);

const WARN = (logMessage) => print(LOGLEVEL.WARN,logMessage);

const ERROR = (logMessage) => print(LOGLEVEL.ERROR,logMessage);

module.exports = {INFO, WARN, ERROR, configureDateFormat: setDateFormat, configureLogFileName: setLogFileName, LOGLEVEL};