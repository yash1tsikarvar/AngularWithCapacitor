import { PricedItemDescriptionPipe } from './priced-item-description.pipe';

describe('PricedItemDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new PricedItemDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
