import { Client } from '../entities/client';
import { CompanyName } from '../value-objects/company-name';

export class ClientFactory {
  createClient(companyNameAsString: string): Client {
    if (companyNameAsString === '') {
      throw new Error('Company name must be provided');
    }
    const companyName = new CompanyName(companyNameAsString);
    return new Client(companyName);
  }
}
