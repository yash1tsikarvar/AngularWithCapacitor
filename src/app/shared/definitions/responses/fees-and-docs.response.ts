import {PricedItem} from '../models/priced-item.interface';

export interface FeesAndDocsResponse {
  documents: string[];
  feesDueNow: PricedItem[];
  feesDueLater: PricedItem[];
  individualFee: PricedItem[];
  /**
   * @deprecated
   */
  depositsAndFees: PricedItem[];
}
