// This is Module
// Module is the meeting place of  controllers and services
// We can add all the controllers and services/providers as 
// dependencies here.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './Items/items/items.controller';
import { ItemsService } from './items/items.service';



@Module({
  imports: [],
  controllers: [AppController,ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
