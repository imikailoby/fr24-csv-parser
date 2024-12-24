import { parseCsvRow } from './rowParser';

describe('rowParser', () => {
  it('parseCsvRow', () => {
    expect(
      parseCsvRow([
        '2024-10-12',
        'DL49',
        'Amsterdam / Schiphol (AMS/EHAM)',
        'New York / John F Kennedy (JFK/KJFK)',
        '12:10:00',
        '14:30:00',
        '08:20:00',
        'Delta Air Lines (DL/DAL)',
        'Airbus A330-900neo (A339)',
        '',
        '1A',
        '1',
        '1',
        '1',
        '',
        '122',
        '1328',
        '223',
        '2130',
      ]),
    ).toEqual({
      aircraft: 'Airbus A330-900neo (A339)',
      aircraftId: '2130',
      airline: 'Delta Air Lines (DL/DAL)',
      airlineId: '223',
      arrivalId: '1328',
      arrivalTime: '14:30:00',
      date: '2024-10-12',
      departureId: '122',
      departureTime: '12:10:00',
      duration: '08:20:00',
      flightClass: '1',
      flightNumber: 'DL49',
      flightReason: '1',
      from: 'Amsterdam / Schiphol (AMS/EHAM)',
      note: '',
      registration: '',
      seatNumber: '1A',
      seatType: '1',
      to: 'New York / John F Kennedy (JFK/KJFK)',
    });
    expect(parseCsvRow([])).toEqual({
      aircraft: '',
      aircraftId: '',
      airline: '',
      airlineId: '',
      arrivalId: '',
      arrivalTime: '',
      date: '',
      departureId: '',
      departureTime: '',
      duration: '',
      flightClass: '',
      flightNumber: '',
      flightReason: '',
      from: '',
      note: '',
      registration: '',
      seatNumber: '',
      seatType: '',
      to: '',
    });
  });
});