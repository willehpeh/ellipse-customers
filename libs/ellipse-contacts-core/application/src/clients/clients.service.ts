import { IClientsRepository } from './clients.repository';
import { ClientFactory } from '@ellipse-contacts/ellipse-contacts-domain';

export class ClientsService {
  constructor(private clientsRepository: IClientsRepository) {}

  createNewClient(companyName: string): Promise<void> {
    const clientFactory = new ClientFactory();
    const client = clientFactory.createClient(companyName);

    return this.clientsRepository.save(client);
  }
}
