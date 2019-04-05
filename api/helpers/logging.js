var bunyan =require('bunyan');

const logging={
    createLogger:()=>{
        return bunyan.createLogger({
            name:'test service',
            streams:[{
                level: 'debug',
                path:process.env.LOG_PATH || './logs.json'
            }]
        });
    }
};
module.exports = logging;