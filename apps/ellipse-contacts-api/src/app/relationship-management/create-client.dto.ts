import { IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty() companyName: string;
}
