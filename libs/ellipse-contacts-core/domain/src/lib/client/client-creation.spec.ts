import { ClientFactory } from './client.factory';

describe('Creating clients', () => {

  let clientFactory: ClientFactory;

  beforeEach(() => {
    clientFactory = new ClientFactory();
  });

  it('should create a Client with the correct company name capitalized', () => {
    const titleCaseCompanyName = 'My New Company';
    const expected = 'MY NEW COMPANY';
    const client = clientFactory.createClient({ companyName: titleCaseCompanyName });

    expect(client.companyName).toBe(expected);
  });

  it('should create a Client with the correct company name capitalized (including accents)', () => {
    const titleCaseCompanyNameWithAccents = 'Mà supéèr êntrôprîseâ';
    const expected = 'MÀ SUPÉÈR ÊNTRÔPRÎSEÂ';
    const client = clientFactory.createClient({ companyName: titleCaseCompanyNameWithAccents });

    expect(client.companyName).toBe(expected);
  });
});
