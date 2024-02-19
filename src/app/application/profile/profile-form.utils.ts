export interface SpecificAddressInformation {
  houseNumber: string,
  streetType: string,
  streetName: string,
  city: string,
  state: string,
  zipCode: string,
}

export class ProfileFormUtils {


  /**
   * Get information about the address that comes from the response
   *
   * Expected incoming format: |8806| |South West| |ST|, |MIAMI|, |FL 33180|
   *                            |          |        |       |         |
   *                            v          v        v       v         v
   *                    HouseNumber StreetName StreetType City    State
   * @param {string} address
   */
  static getSpecificAddressInfoFromAddressResponse(address: string): SpecificAddressInformation {
    const [numberStreetName, city, stateZipcode] = address.split(',').map(value => value.trim());
    const [state, zipCode] = stateZipcode ? stateZipcode.split(' ') : ['', ''];

    const spaceSplit = numberStreetName ? numberStreetName.split(' ') : [];
    const houseNumber = spaceSplit.length > 0 ? spaceSplit.splice(0, 1).join('') : '';
    const streetType = spaceSplit.length > 0 ? spaceSplit.splice(spaceSplit.length - 1, 1).join('') : '';
    const streetName = spaceSplit.length > 0 ? spaceSplit.join(' ').trim() : '';

    return {
      houseNumber: houseNumber,
      streetName: streetName,
      streetType: streetType,
      city: city || '',
      state: state,
      zipCode: zipCode
    }
  }
}
