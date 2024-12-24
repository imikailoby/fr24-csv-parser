import { CabinClass, FlightReason, SeatType } from '../constants/enums';

export function sanitizeField(rawValue: unknown): string | null {
  if (typeof rawValue !== 'string') return null;

  const trimmed = rawValue.trim();

  return !!trimmed.length ? trimmed : null;
}

export function sanitizeCabinClass(rawCabinClass: unknown): CabinClass | null {
  switch (rawCabinClass) {
    case '5':
      return CabinClass.PRIVATE;
    case '3':
      return CabinClass.FIRST;
    case '2':
      return CabinClass.BUSINESS;
    case '4':
      return CabinClass.ECONOMY_PLUS;
    case '1':
      return CabinClass.ECONOMY;
    default:
      return null;
  }
}

export function sanitizeFlightReason(rawFlightReason: unknown): FlightReason | null {
  switch (rawFlightReason) {
    case '4':
      return FlightReason.OTHER;
    case '3':
      return FlightReason.CREW;
    case '2':
      return FlightReason.BUSINESS;
    case '1':
      return FlightReason.LEISURE;
    default:
      return null;
  }
}

export function sanitizeSeatType(rawSeatType: unknown): SeatType | null {
  switch (rawSeatType) {
    case '3':
      return SeatType.AISLE;
    case '2':
      return SeatType.MIDDLE;
    case '1':
      return SeatType.WINDOW;
    default:
      return null;
  }
}

export function sanitizeId(rawValue: unknown): string | null {
  if (typeof rawValue !== 'string') return null;

  // Check if the ID is a valid ("0" is the default value when the ID is not specified)
  return rawValue === '0' ? null : rawValue;
}
