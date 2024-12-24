import { CsvDataColumnIndex } from '../constants/csv';
import type { ParsedCsvRow } from '../types/csv';

export function parseCsvRow(row: string[]): ParsedCsvRow {
  return {
    date: getColumnData(row, CsvDataColumnIndex.DATE),
    flightNumber: getColumnData(row, CsvDataColumnIndex.FLIGHT_NUMBER),
    from: getColumnData(row, CsvDataColumnIndex.FROM),
    to: getColumnData(row, CsvDataColumnIndex.TO),
    departureTime: getColumnData(row, CsvDataColumnIndex.DEP_TIME),
    arrivalTime: getColumnData(row, CsvDataColumnIndex.ARR_TIME),
    duration: getColumnData(row, CsvDataColumnIndex.DURATION),
    airline: getColumnData(row, CsvDataColumnIndex.AIRLINE),
    aircraft: getColumnData(row, CsvDataColumnIndex.AIRCRAFT),
    registration: getColumnData(row, CsvDataColumnIndex.REGISTRATION),
    seatNumber: getColumnData(row, CsvDataColumnIndex.SEAT_NUMBER),
    seatType: getColumnData(row, CsvDataColumnIndex.SEAT_TYPE),
    flightClass: getColumnData(row, CsvDataColumnIndex.FLIGHT_CLASS),
    flightReason: getColumnData(row, CsvDataColumnIndex.FLIGHT_REASON),
    note: getColumnData(row, CsvDataColumnIndex.NOTE),
    departureId: getColumnData(row, CsvDataColumnIndex.DEP_ID),
    arrivalId: getColumnData(row, CsvDataColumnIndex.ARR_ID),
    airlineId: getColumnData(row, CsvDataColumnIndex.AIRLINE_ID),
    aircraftId: getColumnData(row, CsvDataColumnIndex.AIRCRAFT_ID),
  };
}

function getColumnData(row: string[], index: CsvDataColumnIndex): string {
  return row[index] ?? '';
}
