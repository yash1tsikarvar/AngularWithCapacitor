import { helpscoutConfig } from './helpscout';

export const environment = {
  production: true,
  api_url: 'https://r2.tenantevaluation.com',
  api_prefix: 'api/v1/tenant',
  api_finicity_prefix: 'api/v1/finicity',
  idleTime: 60 * 15, // Number of seconds to show the toaster notification informing the user will be logged out
  logoutTime: 60 * 20, // Number of seconds to consider the user logged out
  refundUrl: 'https://refundform.paperform.co/',
  reportDisputeUrl: 'https://tedisputeform.paperform.co/',
  helpscout: helpscoutConfig,
  use_google_api: true,
  square_location_id: 'LXFBE4GE4ARZ2',
  square_application_id: 'sq0idp-CtOUU7CuRRyST70XzxoMuw',
  square_endpoint: 'https://web.squarecdn.com/v1/square.js',
  reviews_url: 'https://reviews.tenantevaluation.com',
  showAda: true,
  iaProjectId: '64ff27b48e0dce0007aace9d',
};
