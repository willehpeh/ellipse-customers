import { Client } from '@ellipse-contacts/ellipse-contacts-domain';
import { IClientsRepository } from '@ellipse-contacts/ellipse-contacts-application';

export class ClientsInMemRepository implements IClientsRepository {

  clients: any[] = [];

  findAll(): Promise<Client[]> {
    return Promise.resolve(this.clients);
  }

  findOne(id: string): Promise<Client> {
    const found = this.clients.find(client => client.id === id);
    return found ? Promise.resolve(found) : Promise.reject();
  }

  save(client: Client): Promise<void> {
    const mappedClient = {
      id: client.id,
      companyName: client.companyName,
      totalCollaborators: client.totalCollaborators
    };
    this.clients.push(mappedClient);
    return Promise.resolve();
  }

  update(id: string, client: Client): Promise<void> {
    return Promise.resolve();
  }

  remove(id: string): Promise<void> {
    return Promise.resolve();
  }

}
