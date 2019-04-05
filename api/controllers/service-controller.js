'use strict'

const logger=require('../helpers/logging').createLogger();

function healthCheck(req,res){
    res.send({
        name:process.env.npm_package_name,
        version:process.env.npm_package_version,
        description:process.env.npm_package_description,
        health:'UP'
    });
}

module.exports={
    healthCheck
}