'use strict';

const logger =require('../helpers/logging').createLogger();
const config = require('../../config');
const axios= require('axios');

let createData= async(req,res)=>{
    process.env['NODE_LTS_REJECT_UNAUTHORIZED']='0';
    let options={
        url: config.get('baseUrl'),
        method: 'POST',
        data: JSON.stringify(req.body),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
             keepAlive: true 
          },
        timeout: 1000 * 10,
        json: true,
        keepAlive: true 
    };

    return await axios(options).then(response=>{
        return response.data;
    }).catch(function(error){
        console.log(error);
        logger.error('Error on service:',error);
        return {
            error:{
                statusCode: 409,
                message: 'failed to hit create service'
            }
        };
    });
}

module.exports={createData}