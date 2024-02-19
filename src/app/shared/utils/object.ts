interface SortFunction {
  (item1: any, item2: any): number;
}

export type OrderByType = 'desc' | 'asc';
export type SortDataType = 'number' | 'date' | 'time' | 'string';

/**
 * Returns a Sort function
 *
 * @param {string} key
 * @param {OrderByType = 'asc'} order
 * @param {SortDataType = 'string'} dataType
 * @returns {SortFunction}
 */
export function sortByKey(key: string, order: OrderByType = 'asc', dataType: SortDataType = 'string'): SortFunction {
  const isAscending = order === 'asc';
  const dummyBaseDate = '1970/01/01 ';

  switch (dataType) {
    case 'string':
      return (a, b) => {
        const multiplier = isAscending ? 1 : -1;
        return a[key].toLowerCase() > b[key].toLowerCase()
          ? multiplier
          : b[key].toLowerCase() > a[key].toLowerCase() ? -1 * multiplier : 0;
      };

    case 'number':
      return (a, b) => (isAscending ? Number(a[key]) - Number(b[key]) : Number(b[key]) - Number(a[key]));

    case 'time':
      // Provide a valid time format
      return (a, b) =>
        isAscending
          ? Date.parse(dummyBaseDate + a[key]) - Date.parse(dummyBaseDate + b[key])
          : Date.parse(dummyBaseDate + b[key]) - Date.parse(dummyBaseDate + a[key]);
  }
}
