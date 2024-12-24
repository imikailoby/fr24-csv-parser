import { parseCsv, validateCsvColumns } from './csvParser';
import { parseCsvRow } from './rowParser';
import { generateResultObject } from '../utils/generators';
import type { FRData } from '../types/models';
import { CsvDataRowIndex, EXPECTED_CSV_COLUMNS } from '../constants/csv';

export class FRParser {
  /** Process the CSV content and return formatted data. */
  public parse(csv: string): FRData[] {
    validateCsvColumns(csv, EXPECTED_CSV_COLUMNS);
    const parsedData = parseCsv(csv);
    const bodyRows = parsedData.slice(CsvDataRowIndex.FIRST_BODY_ROW);

    const result = this.convert(bodyRows);
    return result;
  }

  private convert(bodyRows: string[][]): FRData[] {
    return bodyRows.map((row) => {
      const parsedCsv = parseCsvRow(row);
      return generateResultObject(parsedCsv);
    });
  }
}
