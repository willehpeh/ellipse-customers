import { Client } from '../entities/client';
import { CompanyName } from '../value-objects/company-name';
import { ClientId } from '../value-objects/client-id';

export class ClientFactory {
  createClient(companyNameAsString: string): Client {
    if (companyNameAsString === '') {
      throw new Error('Company name must be provided');
    }
    const clientId = new ClientId();
    const companyName = new CompanyName(companyNameAsString);
    return new Client(clientId, companyName);
  }
}
