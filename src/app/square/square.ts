import {environment} from '../../environments/environment';
import {ScriptService} from '../shared/services/script.service';


export async function initSquare() {

  return await new ScriptService().load('square').then(async () => {
    const APPLICATION_ID = environment.square_application_id;
    const LOCATION_ID = environment.square_location_id;

    // @ts-ignore
    const paymentsSquare = Square.payments(APPLICATION_ID, LOCATION_ID);
    let cardPayment;
    try {
      const cardOptions = getCardOptions();
      cardPayment = await paymentsSquare.card(cardOptions);
      await cardPayment.attach('#card-container');
    } catch (e) {
      console.error('Initializing Card failed', e);
      return;
    }

    function getCardOptions() {
      return {
        'style': {
          'input': {
            'color': '#383342',
          },
          '.input-container.is-focus': {
            'borderWidth': '0'
          },
          // You can use media queries with valid selectors:
          '@media screen and (max-width: 600px)': {
            'input': {
              'fontSize': '12px',
            }
          }
        },
      };
    }
    return cardPayment;
  }).catch(error => console.log(error));
}
