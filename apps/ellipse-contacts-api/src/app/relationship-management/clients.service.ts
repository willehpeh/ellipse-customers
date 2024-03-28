import { Injectable } from '@nestjs/common';
import { ClientsService as ClientsApplicationService } from '@ellipse-contacts/ellipse-contacts-application' ;
import { ClientsInMemRepository } from './clients-in-mem.repository';
import { Client } from '@ellipse-contacts/ellipse-contacts-domain';

@Injectable()
export class ClientsService {

  private clientsApplicationService: ClientsApplicationService;
  private clientsRepository: ClientsInMemRepository;

  constructor() {
    this.clientsRepository = new ClientsInMemRepository();
    this.clientsApplicationService = new ClientsApplicationService(this.clientsRepository);
  }

  createClient(companyName: string): Promise<Client[]> {
    return this.clientsApplicationService.createNewClient(companyName).then(() => {
      return this.clientsRepository.clients;
    });
  }

  getClients() {
    return this.clientsRepository.clients;
  }

  getClientsCount() {
    return { count: this.clientsRepository.clients.length };
  }
}
