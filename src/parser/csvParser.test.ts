import { EXPECTED_CSV_COLUMNS } from '../constants/csv';
import {
  mockedCsvContent,
  mockedCsvContentInvalid,
  mockedCsvContentInvalidHeaders,
  mockedCsvContentEmpty,
} from '../tests/mocks';
import { parseCsv, validateCsvColumns } from './csvParser';

describe('csvParser', () => {
  it('parseCsv', () => {
    expect(parseCsv(mockedCsvContent)).toMatchSnapshot('valid-snapshot');
    expect(parseCsv(mockedCsvContentEmpty)).toMatchSnapshot('empty-snapshot');
  });

  it('validateCsvColumns', () => {
    function emptyFunction() {
      validateCsvColumns('', EXPECTED_CSV_COLUMNS);
    }
    function invalidFunction() {
      validateCsvColumns(mockedCsvContentInvalid, EXPECTED_CSV_COLUMNS);
    }
    function invalidHeadersFunction() {
      validateCsvColumns(mockedCsvContentInvalidHeaders, EXPECTED_CSV_COLUMNS);
    }

    expect(validateCsvColumns(mockedCsvContent, EXPECTED_CSV_COLUMNS)).toBeUndefined();
    expect(emptyFunction).toThrowErrorMatchingSnapshot('empty-snapshot');
    expect(invalidFunction).toThrowErrorMatchingSnapshot('invalid-snapshot');
    expect(invalidHeadersFunction).toThrowErrorMatchingSnapshot('invalid-headers-snapshot');
  });
});
