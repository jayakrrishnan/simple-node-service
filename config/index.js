const convict= require('convict');

let config= convict({
    nodeEnv: {
        doc: 'node environment',
        format: String,
        default: 'cert',
        env: 'NODE_ENV'
    }
});

const env= config.get('nodeEnv');
config.load(require('./env/url.'+env+'.js'));

module.exports= config;