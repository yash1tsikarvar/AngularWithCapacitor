import { helpscoutConfig } from './helpscout';

console.log('Greetings QA People on Production Mode');

export const environment = {
  production: true,
  api_url: 'https://stage-r2.tenantevaluation.com',
  api_prefix: 'api/v1/tenant',
  api_finicity_prefix: 'api/v1/finicity',
  idleTime: 60 * 15, // Number of seconds to show the toaster notification informing the user will be logged out
  logoutTime: 60 * 20, // Number of seconds to consider the user logged out
  refundUrl: 'https://refundform.paperform.co/',
  reportDisputeUrl: 'https://tedisputeform.paperform.co/',
  helpscout: helpscoutConfig,
  use_google_api: false,
  square_location_id: 'LXGW16WF4ZXDT',
  square_application_id: 'sandbox-sq0idb-jfnQtCcXGzehE6fHf7itJA',
  square_endpoint: 'https://sandbox.web.squarecdn.com/v1/square.js',
  reviewswidget_url: 'https://files.tenantevaluation.com/review-widget/v0.0.4/reviews-widget-stage-v0.0.4.js',
  showAda: false,
};
