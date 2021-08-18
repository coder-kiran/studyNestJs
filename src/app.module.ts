// This is Module
// Module is the meeting place of  controllers and services
// We can add all the controllers and services/providers as 
// dependencies here.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';



@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
