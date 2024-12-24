import { CabinClass, FlightReason, SeatType } from '../constants/enums';
import { sanitizeField, sanitizeCabinClass, sanitizeFlightReason, sanitizeSeatType, sanitizeId } from './sanitizers';

describe('sanitizers', () => {
  it('sanitizeField', () => {
    expect(sanitizeField(123)).toBeNull();
    expect(sanitizeField('')).toBeNull();
    expect(sanitizeField(undefined)).toBeNull();
    expect(sanitizeField(true)).toBeNull();
    expect(sanitizeField('  foo  ')).toBe('foo');
  });

  it('sanitizeCabinClass', () => {
    expect(sanitizeCabinClass('5')).toBe(CabinClass.PRIVATE);
    expect(sanitizeCabinClass('3')).toBe(CabinClass.FIRST);
    expect(sanitizeCabinClass('2')).toBe(CabinClass.BUSINESS);
    expect(sanitizeCabinClass('4')).toBe(CabinClass.ECONOMY_PLUS);
    expect(sanitizeCabinClass('1')).toBe(CabinClass.ECONOMY);
    expect(sanitizeCabinClass('0')).toBeNull();
    expect(sanitizeCabinClass(undefined)).toBeNull();
  });

  it('sanitizeFlightReason', () => {
    expect(sanitizeFlightReason('4')).toBe(FlightReason.OTHER);
    expect(sanitizeFlightReason('3')).toBe(FlightReason.CREW);
    expect(sanitizeFlightReason('2')).toBe(FlightReason.BUSINESS);
    expect(sanitizeFlightReason('1')).toBe(FlightReason.LEISURE);
    expect(sanitizeFlightReason(0)).toBeNull();
    expect(sanitizeFlightReason(undefined)).toBeNull();
  });

  it('sanitizeSeatType', () => {
    expect(sanitizeSeatType('3')).toBe(SeatType.AISLE);
    expect(sanitizeSeatType('2')).toBe(SeatType.MIDDLE);
    expect(sanitizeSeatType('1')).toBe(SeatType.WINDOW);
    expect(sanitizeSeatType('0')).toBeNull();
    expect(sanitizeSeatType(undefined)).toBeNull();
  });

  it('sanitizeId', () => {
    expect(sanitizeId(123)).toBeNull();
    expect(sanitizeId('0')).toBeNull();
    expect(sanitizeId('123')).toBe('123');
  });
});
