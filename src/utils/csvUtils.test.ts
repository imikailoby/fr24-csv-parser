import { cleanValue, detectDelimiter } from './csvUtils';

describe('csvUtils', () => {
  it('cleanValue', () => {
    expect(cleanValue('""foo""')).toBe('foo');
    expect(cleanValue('bar\\')).toBe('bar');
  });

  it('detectDelimiter', () => {
    expect(detectDelimiter('a,b,c\n1,2,3')).toBe(',');
    expect(detectDelimiter('a;b;c\n1;2;3')).toBe(';');
    expect(detectDelimiter('a\tb\tc\n1\t2\t3')).toBe('\t');
    expect(detectDelimiter('a|b|c\n1|2|3')).toBe('|');
  });
});
