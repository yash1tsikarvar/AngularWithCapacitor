import { environment } from '../../../environments/environment';

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name: 'finicity', src: 'https://connect2.finicity.com/assets/sdk/finicity-connect.min.js'},
  { name: 'square', src: environment.square_endpoint },
  { name: 'reviewswidgetvars', src: `${environment.reviews_url}/env.js` },
  { name: 'reviewswidget', src: `${environment.reviews_url}/widget/widget.js` },
];
