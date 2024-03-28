import { ClientsService } from '../clients.service';
import { ClientsInMemRepository } from './clients-in-mem.repository';

describe('Creating clients', () => {
  let clientsService: ClientsService;
  let clientsRepository: ClientsInMemRepository;

  beforeEach(() => {
    clientsRepository = new ClientsInMemRepository();
    clientsService = new ClientsService(clientsRepository);
  });

  it('should create a new client with its name capitalized', () => {
    const titleCaseCompanyName = 'My New Company';
    const expected = 'MY NEW COMPANY';
    clientsService.createNewClient(titleCaseCompanyName);

    expect(clientsRepository.clients[0].companyName).toBe(expected);
  });

  it('should create a Client with the correct company name capitalized (including accents)', () => {
    const titleCaseCompanyNameWithAccents = 'Mà supéèr êntrôprîseâ';
    const expected = 'MÀ SUPÉÈR ÊNTRÔPRÎSEÂ';
    clientsService.createNewClient(titleCaseCompanyNameWithAccents);

    expect(clientsRepository.clients[0].companyName).toBe(expected);
  });

  it('should not be able to create a Client with an empty company name', () => {
    try {
      clientsService.createNewClient('');
    } catch {
      expect(clientsRepository.clients.length).toBe(0);
    }
  });

  it('should not have any collaborators when Client is created', () => {
    clientsService.createNewClient('My awesome company');

    expect(clientsRepository.clients[0].totalCollaborators).toBe(0);
  });

});
