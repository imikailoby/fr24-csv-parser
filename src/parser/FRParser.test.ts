import { mockedCsvContent } from '../tests/mocks';
import { FRParser } from './FRParser';

describe('FRParser', () => {
  it('parse', () => {
    expect(new FRParser().parse(mockedCsvContent)).toMatchSnapshot('parse-default');
  });
});
