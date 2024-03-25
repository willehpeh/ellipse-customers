import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RelationshipManagementModule } from './relationship-management/relationship-management.module';

@Module({
  imports: [RelationshipManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
