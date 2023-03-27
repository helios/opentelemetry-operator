import { initialize } from "helios-opentelemetry-sdk";

const apiToken = process.env.HS_TOKEN || "";
const serviceName = process.env.HS_SERVICE_NAME || "";
const environment = process.env.HS_ENVIRONMENT || "";

initialize({
  apiToken,
  serviceName,
  environment,
  enable: true,
});
