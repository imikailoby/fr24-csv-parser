import { CsvDataRowIndex } from '../constants/csv';
import { cleanValue, detectDelimiter } from '../utils/csvUtils';

// First line is always header, second and following are data
const MIN_LINES_WITH_HEADER_AND_DATA = 2;

export function parseCsv(csvText: string): string[][] {
  const delimiter = detectDelimiter(csvText);
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim() !== '');

  if (lines.length < MIN_LINES_WITH_HEADER_AND_DATA) {
    return [];
  }

  return lines.map((line) => line.split(delimiter).map((value) => cleanValue(value.trim())));
}

export function validateCsvColumns(csvText: string, expectedColumns: string[]): void {
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim() !== '');
  if (lines.length === 0) {
    throw new Error('CSV-file is empty');
  }

  const headers = lines[CsvDataRowIndex.HEADER].split(',').map((h) => h.trim().replace(/^"(.*)"$/, '$1'));

  if (headers.length !== expectedColumns.length) {
    throw new Error(`Expected ${expectedColumns.length} columns, but got ${headers.length}`);
  }

  for (let i = 0; i < expectedColumns.length; i++) {
    if (headers[i] !== expectedColumns[i]) {
      throw new Error(`Error in the ${i + 1} column: expected "${expectedColumns[i]}", but got "${headers[i]}"`);
    }
  }
}
