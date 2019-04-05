'use strict'

const forever=require('forever-monitor');
const logger=require('./api/helpers/logging').createLogger();

let child= new forever.Monitor('app.js',{
    silent:false,
    args:[],
    minUptime:4000,
    spinSleepTime:2000
});
child.on('restart',function () {
    logger.info('Forever restarting script for '+child.times+ 'times');
});

child.start();