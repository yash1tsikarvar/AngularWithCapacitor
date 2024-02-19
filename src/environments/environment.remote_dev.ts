import { helpscoutConfig } from './helpscout';

export const environment = {
  production: true,
  api_url: 'https://dev-r2.tenantevaluation.com',
  api_prefix: 'api/v1/tenant',
  api_finicity_prefix: 'api/v1/finicity',
  idleTime: 60 * 15, // Number of seconds to show the toaster notification informing the user will be logged out
  logoutTime: 60 * 20, // Number of seconds to consider the user logged out
  refundUrl: 'https://refundform.paperform.co/',
  reportDisputeUrl: 'https://tedisputeform.paperform.co/',
  helpscout: helpscoutConfig,
  use_google_api: false,
  square_location_id: 'LXGW16WF4ZXDT',
  square_application_id: 'sandbox-sq0idb-9GkYWKbzaxaeuwEDMZgiYw',
  square_endpoint: 'https://sandbox.web.squarecdn.com/v1/square.js',
  reviews_url: 'https://dev-reviews.tenantevaluation.com',
  showAda: false,
  iaProjectId: '64ff27b48e0dce0007aace9d',
};
