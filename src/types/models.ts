import type { SeatType, CabinClass, FlightReason } from '../constants/enums';

export interface FRData {
  from: Destination;
  to: Destination;
  flight: Flight;
  airline: Airline;
  aircraft: Aircraft;
  passenger: Passenger;
}

export interface Destination {
  /** City name from the destination.
   * Might be null if the city name is not recognized/valid/specified from the raw data.
   */
  city: string | null;
  /** Airport name from the destination.
   * Might be null if the airport is not recognized/valid/specified from the raw data.
   */
  airport: string | null;
  /** IATA code from the destination.
   * Might be null if the IATA code is not recognized/valid/specified from the raw data.
   */
  iata: string | null;
  /** ICAO code from the destination.
   * Might be null if the ICAO code is not recognized/valid/specified from the raw data.
   */
  icao: string | null;
}

export interface Aircraft {
  /**
   * Specific FlightRadar's aircraft ID.
   * Might be null if the aircraft ID is not recognized/valid/specified from the raw data.
   */
  id: string | null;
  /**
   * Aircraft manufacturer.
   * Might be null if the aircraft manufacturer is not recognized/valid/specified from the raw data.
   */
  manufacturer: string | null;
  /**
   * Aircraft model.
   * Might be null if the aircraft model is not recognized/valid/specified from the raw data.
   */
  model: string | null;
  /**
   * ICAO Aircraft Type Designator
   * Might be null if the aircraft ICAO code is not recognized/valid/specified from the raw data.
   */
  code: string | null;
  /**
   * Aircraft Registration Code
   * Might be null if the aircraft registration code is not recognized/valid/specified from the raw data.
   */
  registration: string | null;
}

export interface Airline {
  /**
   * Specific FlightRadar's airline ID.
   * Might be null if the airline ID is not recognized/valid/specified from the raw data.
   */
  id: string | null;
  /**
   * Name of the airline.
   * Might be null if the airline name is not recognized/valid/specified from the raw data.
   */
  name: string | null;
  /**
   * IATA code from the airline.
   * Might be null if the IATA code is not recognized/valid/specified from the raw data.
   */
  iata: string | null;
  /**
   * ICAO code from the airline.
   * Might be null if the ICAO code is not recognized/valid/specified from the raw data.
   */
  icao: string | null;
}

export interface Passenger {
  seat: {
    /**
     * Seat number.
     * Might be null if the seat number is not recognized/valid/specified from the raw data.
     */
    number: string | null;
    /**
     * Seat type.
     * Might be null if the seat type is not recognized/valid/specified from the raw data.
     */
    type: SeatType | null;
  };
  /**
   * Cabin class.
   * Might be null if the cabin class is not recognized/valid/specified from the raw data.
   */
  cabin: CabinClass | null;
  /**
   * Reason for the flight.
   * Might be null if the reason is not recognized/valid/specified from the raw data.
   */
  reason: FlightReason | null;
  /**
   * User's note.
   * Might be null if the nore is not recognized/valid/specified from the raw data.
   */
  note: string | null;
}

export interface Flight {
  /**
   * Date format: YYYY-MM-DD.
   * Should always be present if incoming CSV is valid.
   */
  date: string;
  /**
   * Departure time format: HH:MM:SS.
   *
   * Even though 00:00:00 might mean 'time is not specified', it will be present instead of null.
   * There is no possibility to know for sure if the time is not specified or if the time is 00:00:00.
   */
  departureTime: string;
  /**
   * Specific FlightRadar's departure ID.
   * Should always be present if incoming CSV is valid.
   */
  departureId: string;
  /**
   * Arrival time format: HH:MM:SS.
   *
   * Even though 00:00:00 might mean 'time is not specified', it will be present instead of null.
   * There is no possibility to know for sure if the time is not specified or if the time is 00:00:00.
   */
  arrivalTime: string;
  /**
   * Specific FlightRadar's arrival ID.
   * Should always be present if incoming CSV is valid.
   */
  arrivalId: string;
  /**
   * IATA Flight Number.
   * Might be null if the flight number is not recognized/valid/specified from the raw data.
   */
  number: string | null;
  /**
   * Duration format: HH:MM:SS.
   * Should always be present if incoming CSV is valid.
   */
  duration: string;
}
