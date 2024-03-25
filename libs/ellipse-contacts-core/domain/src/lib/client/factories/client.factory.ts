import { Client } from '../entities/client';
import { CompanyName } from '../value-objects/company-name';

export class ClientFactory {
  createClient(companyNameAsString: string): Client {
    const companyName = new CompanyName(companyNameAsString);
    return new Client(companyName);
  }
}
