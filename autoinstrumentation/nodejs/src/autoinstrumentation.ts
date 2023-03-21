import { initialize } from 'helios-opentelemetry-sdk';

const API_TOKEN = process.env.HS_TOKEN || ''
const SERVICE_NAME = process.env.HS_SERVICE || ''
const ENVIRONMENT_NAME = process.env.HS_ENVIRONMENT || ''

initialize({
    apiToken: API_TOKEN,       
    serviceName: SERVICE_NAME, 
    environment: ENVIRONMENT_NAME,
    enable: true
 });