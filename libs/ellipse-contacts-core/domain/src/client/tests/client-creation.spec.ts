import { ClientFactory } from '../factories/client.factory';
import { Client } from '../entities/client';

describe('Creating clients', () => {

  let clientFactory: ClientFactory;

  beforeEach(() => {
    clientFactory = new ClientFactory();
  });

  it('should create a Client with the correct company name capitalized', () => {
    const titleCaseCompanyName = 'My New Company';
    const expected = 'MY NEW COMPANY';
    const client = clientFactory.createClient(titleCaseCompanyName);

    expect(client.companyName).toBe(expected);
  });

  it('should create a Client with the correct company name capitalized (including accents)', () => {
    const titleCaseCompanyNameWithAccents = 'Mà supéèr êntrôprîseâ';
    const expected = 'MÀ SUPÉÈR ÊNTRÔPRÎSEÂ';
    const client = clientFactory.createClient(titleCaseCompanyNameWithAccents);

    expect(client.companyName).toBe(expected);
  });

  it('should not be able to create a Client with an empty company name', () => {
    let client: Client;
    try {
      client = clientFactory.createClient('');
      expect(client).toBeUndefined();
    } catch (error) { /* no-op */ }
  });

  it('should not have any collaborators when Client is created', () => {
    const client = clientFactory.createClient('My awesome company');

    expect(client.totalCollaborators).toBe(0);
  });
});
