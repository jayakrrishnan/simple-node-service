'use strict'

const logger=require('../helpers/logging').createLogger();
const service=require('../static-data/static-data-service');

function healthCheck(req,res){
    res.send({
        name:process.env.npm_package_name,
        version:process.env.npm_package_version,
        description:process.env.npm_package_description,
        health:'UP'
    });
}

function jsonCreateData(req,res){
    createData(req,res);
}

let createData= async (req,res)=>{
    const createdData= await service.createData(req,res);
    if(createdData.error)
        res.status(createdData.error.statusCode).send(createdData);
    else
        res.send(createdData);
}

module.exports={
    healthCheck,
    jsonCreateData
}