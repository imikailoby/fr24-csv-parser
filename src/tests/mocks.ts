import type { ParsedCsvRow } from '../types/csv';

export const mockedCsvContent: string = `
Date,"Flight number",From,To,"Dep time","Arr time",Duration,Airline,Aircraft,Registration,"Seat number","Seat type","Flight class","Flight reason",Note,Dep_id,Arr_id,Airline_id,Aircraft_id
2024-10-12,DL49,"Amsterdam / Schiphol (AMS/EHAM)","New York / John F Kennedy (JFK/KJFK)",12:10:00,14:30:00,08:20:00,"Delta Air Lines (DL/DAL)","Airbus A330-900neo (A339)",,1A,1,1,1,,122,1328,223,2130
`;

export const mockedCsvContentInvalid: string = `
Date,"Flight number",To,"Dep time","Arr time",Duration,Airline,Aircraft,Registration,"Seat number","Seat type","Flight class","Flight reason",Note,Dep_id,Arr_id,Airline_id,Aircraft_id
2024-10-12,DL49,"New York / John F Kennedy (JFK/KJFK)",12:10:00,14:30:00,08:20:00,"Delta Air Lines (DL/DAL)","Airbus A330-900neo (A339)",,1A,1,1,1,,122,1328,223,2130
`;

export const mockedCsvContentInvalidHeaders: string = `
Date,,From,To,"Dep time","Arr time",Duration,Airline,Aircraft,Registration,"Seat number","Seat type","Flight class","Flight reason",Note,Dep_id,Arr_id,Airline_id,Aircraft_id
2024-10-12,DL49,"Amsterdam / Schiphol (AMS/EHAM)","New York / John F Kennedy (JFK/KJFK)",12:10:00,14:30:00,08:20:00,"Delta Air Lines (DL/DAL)","Airbus A330-900neo (A339)",,1A,1,1,1,,122,1328,223,2130
`;

export const mockedCsvContentEmpty: string = `
Date,"Flight number",From,To,"Dep time","Arr time",Duration,Airline,Aircraft,Registration,"Seat number","Seat type","Flight class","Flight reason",Note,Dep_id,Arr_id,Airline_id,Aircraft_id
`;

export const mockedParsedRowValid: ParsedCsvRow = {
  from: 'Amsterdam / Schiphol (AMS/EHAM)',
  to: 'New York / John F Kennedy (JFK/KJFK)',
  date: '2024-10-12',
  flightNumber: 'DL49',
  departureTime: '12:10:00',
  arrivalTime: '14:30:00',
  duration: '08:20:00',
  departureId: '122',
  arrivalId: '1328',
  airline: 'Delta Air Lines (DL/DAL)',
  airlineId: '223',
  aircraft: 'Airbus A330-900neo (A339)',
  aircraftId: '2130',
  registration: 'N429DX',
  seatNumber: '1A',
  seatType: '1',
  flightClass: '1',
  flightReason: '1',
  note: 'Note',
};

export const mockedParsedRowInvalid: ParsedCsvRow = {
  from: 'Amsterdam / Schiphol (AMS/EHAM)',
  to: 'New York / John F Kennedy (JFK/KJFK)',
  date: '2024-10-12',
  flightNumber: '',
  departureTime: '00:00:00',
  arrivalTime: '00:00:00',
  duration: '00:00:00',
  departureId: '122',
  arrivalId: '1328',
  airline: ' (/)',
  airlineId: '0',
  aircraft: ' ()',
  aircraftId: '0',
  registration: '',
  seatNumber: '',
  seatType: '0',
  flightClass: '0',
  flightReason: '0',
  note: '',
};
