import type { ParsedCsvRow } from '../types/csv';
import type { Aircraft, Airline, Destination, Flight, FRData, Passenger } from '../types/models';
import { sanitizeCabinClass, sanitizeField, sanitizeFlightReason, sanitizeId, sanitizeSeatType } from './sanitizers';

export function generateResultObject(parsedCsv: ParsedCsvRow): FRData {
  const from = generateDestination(parsedCsv.from);
  const to = generateDestination(parsedCsv.to);
  const flight = generateFlight(
    parsedCsv.date,
    parsedCsv.flightNumber,
    parsedCsv.departureTime,
    parsedCsv.arrivalTime,
    parsedCsv.duration,
    parsedCsv.departureId,
    parsedCsv.arrivalId,
  );
  const airline = generateAirline(parsedCsv.airline, parsedCsv.airlineId);
  const aircraft = generateAircraft(parsedCsv.aircraft, parsedCsv.aircraftId, parsedCsv.registration);
  const passenger = generatePassenger(
    parsedCsv.seatNumber,
    parsedCsv.seatType,
    parsedCsv.flightClass,
    parsedCsv.flightReason,
    parsedCsv.note,
  );

  return {
    from,
    to,
    flight,
    airline,
    aircraft,
    passenger,
  };
}

export function generateDestination(rawDestination: string): Destination {
  // The rawDestination is always in the format "City / Airport (IATA/ICAO)"
  const match = rawDestination.match(/^(.+?)\s\/\s(.+?)\s\((\w{3})\/(\w{4})\)$/);

  return {
    city: sanitizeField(match?.[1]),
    airport: sanitizeField(match?.[2]),
    iata: sanitizeField(match?.[3]),
    icao: sanitizeField(match?.[4]),
  };
}

export function generateAircraft(aircraft: string, id: string, registration: string): Aircraft {
  // The aircraft is always in the format "Manufacturer Model (Code)"
  const match = aircraft.match(/^([\w\s-]+)\s([\w\s-]+)\s\((\w+)\)$/);

  return {
    id: sanitizeId(id),
    manufacturer: sanitizeField(match?.[1]),
    model: sanitizeField(match?.[2]),
    code: sanitizeField(match?.[3]),
    registration: sanitizeField(registration),
  };
}

export function generateAirline(airline: string, id: string): Airline {
  // The airline is always in the format "Airline Name (IATA/ICAO)"
  const match = airline.match(/^(.+?)\s\((\w{2})\/(\w{3})\)$/);

  return {
    id: sanitizeId(id),
    name: sanitizeField(match?.[1]),
    iata: sanitizeField(match?.[2]),
    icao: sanitizeField(match?.[3]),
  };
}

export function generatePassenger(
  seatNumber: string,
  seatType: string,
  flightClass: string,
  flightReason: string,
  note: string,
): Passenger {
  return {
    seat: {
      number: sanitizeField(seatNumber),
      type: sanitizeSeatType(seatType),
    },
    cabin: sanitizeCabinClass(flightClass),
    reason: sanitizeFlightReason(flightReason),
    note: sanitizeField(note),
  };
}

export function generateFlight(
  date: string,
  flightNumber: string,
  departureTime: string,
  arrivalTime: string,
  duration: string,
  departureId: string,
  arrivalId: string,
): Flight {
  return {
    date, // No need to sanitize the date, it's always in the same YYYY-MM-DD format
    number: sanitizeField(flightNumber),
    departureTime, // No need to sanitize the time, it's always in the same HH:MM:SS format
    arrivalTime, // No need to sanitize the time, it's always in the same HH:MM:SS format
    duration, // No need to sanitize the duration, it's always in the same HH:MM:SS format
    departureId, // No need to sanitize the departureId, it's always provided
    arrivalId, // No need to sanitize the arrivalId, it's always provided
  };
}
