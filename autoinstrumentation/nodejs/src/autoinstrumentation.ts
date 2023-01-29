import { initialize } from 'helios-opentelemetry-sdk';

initialize({
    apiToken: process.env.HS_TOKEN!,
    serviceName: process.env.SERVICE_NAME,
    environment: process.env.HS_ENVIRONMENT,
    enable: true,
});
