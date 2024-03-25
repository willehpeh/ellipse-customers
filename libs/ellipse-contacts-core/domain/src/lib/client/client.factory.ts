import { Client } from './client';
import { CompanyName } from './value-objects/company-name';

export class ClientFactory {
  constructor() {}

  createClient(clientInfo: { companyName: string }): Client {
    const companyName = new CompanyName(clientInfo.companyName);
    return new Client(companyName);
  }
}
