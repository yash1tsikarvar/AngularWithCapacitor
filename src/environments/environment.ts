/* eslint-disable no-undef */
import { helpscoutConfig } from './helpscout';

const Window = window as any;

export const environment = {
  production: Window.TE_PRODUCTION,
  api_url: Window.TE_API_URL,
  api_prefix: 'api/v1/tenant',
  api_finicity_prefix: 'api/v1/finicity',
  idleTime: 60 * 15, // Number of seconds to show the toaster notification informing the user will be logged out
  logoutTime: 60 * 20, // Number of seconds to consider the user logged out
  refundUrl: 'https://refundform.paperform.co/',
  reportDisputeUrl: 'https://tedisputeform.paperform.co/',
  helpscout: helpscoutConfig,
  use_google_api: Window.TE_USE_GOOGLE_API,
  square_location_id: Window.TE_SQUARE_LOCATION_ID,
  square_application_id: Window.TE_SQUARE_APPLICATION_ID,
  square_endpoint: Window.TE_SQUARE_ENDPOINT,
  reviews_url: Window.TE_REVIEWS_URL,
  showAda: Window.TE_SHOW_ADA || false,
  iaProjectId: Window.TE_IA_PROJECT_ID || '',
  chatbotBackendUrl: Window.TE_CHATBOT_BACKEND_URL || '',
  chatbotWidgetUrl: Window.TE_CHATBOT_WIDGET_URL || '',
};
