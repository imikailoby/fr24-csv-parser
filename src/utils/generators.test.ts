import { CabinClass, FlightReason, SeatType } from '../constants/enums';
import { mockedParsedRowValid, mockedParsedRowInvalid } from '../tests/mocks';
import {
  generateResultObject,
  generateDestination,
  generateAircraft,
  generateAirline,
  generatePassenger,
  generateFlight,
} from './generators';

describe('generators', () => {
  it('generateResultObject', () => {
    expect(generateResultObject(mockedParsedRowValid)).toEqual({
      from: {
        city: 'Amsterdam',
        airport: 'Schiphol',
        iata: 'AMS',
        icao: 'EHAM',
      },
      to: {
        city: 'New York',
        airport: 'John F Kennedy',
        iata: 'JFK',
        icao: 'KJFK',
      },
      flight: {
        date: '2024-10-12',
        number: 'DL49',
        departureTime: '12:10:00',
        arrivalTime: '14:30:00',
        duration: '08:20:00',
        departureId: '122',
        arrivalId: '1328',
      },
      airline: {
        id: '223',
        name: 'Delta Air Lines',
        iata: 'DL',
        icao: 'DAL',
      },
      aircraft: {
        id: '2130',
        manufacturer: 'Airbus',
        model: 'A330-900neo',
        code: 'A339',
        registration: 'N429DX',
      },
      passenger: {
        seat: {
          number: '1A',
          type: SeatType.WINDOW,
        },
        cabin: CabinClass.ECONOMY,
        reason: FlightReason.LEISURE,
        note: 'Note',
      },
    });
    expect(generateResultObject(mockedParsedRowInvalid)).toEqual({
      from: {
        city: 'Amsterdam',
        airport: 'Schiphol',
        iata: 'AMS',
        icao: 'EHAM',
      },
      to: {
        city: 'New York',
        airport: 'John F Kennedy',
        iata: 'JFK',
        icao: 'KJFK',
      },
      flight: {
        date: '2024-10-12',
        number: null,
        departureTime: '00:00:00',
        arrivalTime: '00:00:00',
        duration: '00:00:00',
        departureId: '122',
        arrivalId: '1328',
      },
      airline: {
        id: null,
        name: null,
        iata: null,
        icao: null,
      },
      aircraft: {
        id: null,
        manufacturer: null,
        model: null,
        code: null,
        registration: null,
      },
      passenger: {
        seat: {
          number: null,
          type: null,
        },
        cabin: null,
        reason: null,
        note: null,
      },
    });
  });

  it('generateDestination', () => {
    expect(generateDestination(mockedParsedRowValid.from)).toEqual({
      city: 'Amsterdam',
      airport: 'Schiphol',
      iata: 'AMS',
      icao: 'EHAM',
    });
    expect(generateDestination(mockedParsedRowInvalid.from)).toEqual({
      city: 'Amsterdam',
      airport: 'Schiphol',
      iata: 'AMS',
      icao: 'EHAM',
    });
  });

  it('generateAircraft', () => {
    expect(
      generateAircraft(
        mockedParsedRowValid.aircraft,
        mockedParsedRowValid.aircraftId,
        mockedParsedRowValid.registration,
      ),
    ).toEqual({
      id: '2130',
      manufacturer: 'Airbus',
      model: 'A330-900neo',
      code: 'A339',
      registration: 'N429DX',
    });
    expect(
      generateAircraft(
        mockedParsedRowInvalid.aircraft,
        mockedParsedRowInvalid.aircraftId,
        mockedParsedRowInvalid.registration,
      ),
    ).toEqual({
      id: null,
      manufacturer: null,
      model: null,
      code: null,
      registration: null,
    });
  });

  it('generateAirline', () => {
    expect(generateAirline(mockedParsedRowValid.airline, mockedParsedRowValid.airlineId)).toEqual({
      id: '223',
      name: 'Delta Air Lines',
      iata: 'DL',
      icao: 'DAL',
    });
    expect(generateAirline(mockedParsedRowInvalid.airline, mockedParsedRowInvalid.airlineId)).toEqual({
      id: null,
      name: null,
      iata: null,
      icao: null,
    });
  });

  it('generatePassenger', () => {
    expect(
      generatePassenger(
        mockedParsedRowValid.seatNumber,
        mockedParsedRowValid.seatType,
        mockedParsedRowValid.flightClass,
        mockedParsedRowValid.flightReason,
        mockedParsedRowValid.note,
      ),
    ).toEqual({
      seat: {
        number: '1A',
        type: SeatType.WINDOW,
      },
      cabin: CabinClass.ECONOMY,
      reason: FlightReason.LEISURE,
      note: 'Note',
    });
    expect(
      generatePassenger(
        mockedParsedRowInvalid.seatNumber,
        mockedParsedRowInvalid.seatType,
        mockedParsedRowInvalid.flightClass,
        mockedParsedRowInvalid.flightReason,
        mockedParsedRowInvalid.note,
      ),
    ).toEqual({
      seat: {
        number: null,
        type: null,
      },
      cabin: null,
      reason: null,
      note: null,
    });
  });

  it('generateFlight', () => {
    expect(
      generateFlight(
        mockedParsedRowValid.date,
        mockedParsedRowValid.flightNumber,
        mockedParsedRowValid.departureTime,
        mockedParsedRowValid.arrivalTime,
        mockedParsedRowValid.duration,
        mockedParsedRowValid.departureId,
        mockedParsedRowValid.arrivalId,
      ),
    ).toEqual({
      date: '2024-10-12',
      number: 'DL49',
      departureTime: '12:10:00',
      arrivalTime: '14:30:00',
      duration: '08:20:00',
      departureId: '122',
      arrivalId: '1328',
    });
    expect(
      generateFlight(
        mockedParsedRowInvalid.date,
        mockedParsedRowInvalid.flightNumber,
        mockedParsedRowInvalid.departureTime,
        mockedParsedRowInvalid.arrivalTime,
        mockedParsedRowInvalid.duration,
        mockedParsedRowInvalid.departureId,
        mockedParsedRowInvalid.arrivalId,
      ),
    ).toEqual({
      date: '2024-10-12',
      number: null,
      departureTime: '00:00:00',
      arrivalTime: '00:00:00',
      duration: '00:00:00',
      departureId: '122',
      arrivalId: '1328',
    });
  });
});
