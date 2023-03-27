from helios import initialize
import os

API_TOKEN = os.getenv('HS_TOKEN')
SERVICE_NAME = os.getenv('HS_SERVICE_NAME')
ENV_NAME = os.getenv('HS_ENVIRONMENT')

initialize(api_token=API_TOKEN, service_name=SERVICE_NAME, environment=ENV_NAME, enabled=True)
