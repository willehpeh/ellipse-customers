import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './create-client.dto';

@Controller('clients')
export class ClientsController {

  constructor(private clientsService: ClientsService) {}

  @Get()
  getClients() {
    return { clients: this.clientsService.getClients() };
  }

  @Get('count')
  getClientCount() {
    return this.clientsService.getClientsCount();
  }

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto.companyName);
  }
}
