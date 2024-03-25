import { ClientFactory } from './client.factory';

describe('Creating clients', () => {

  let titleCaseCompanyName: string;
  let companyNameAllCaps: string;

  let titleCaseCompanyNameWithAccents: string;
  let companyNameWithAccentsAllCaps: string;

  beforeEach(() => {
    titleCaseCompanyName = 'My New Company';
    companyNameAllCaps = 'MY NEW COMPANY';

    titleCaseCompanyNameWithAccents = 'Mà supéèr êntrôprîseâ';
    companyNameWithAccentsAllCaps = 'MÀ SUPÉÈR ÊNTREÔPRÎSEÀ';
  });

  it('should create a Client with the correct company name capitalized', () => {
    const clientFactory = new ClientFactory();
    const client = clientFactory.createClient({ companyName: titleCaseCompanyName });

    expect(client.companyName).toBe(companyNameAllCaps);
  });
});
