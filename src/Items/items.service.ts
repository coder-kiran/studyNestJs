// Providers / Services
// Actually controllers should handle HTTP requests
// and delegates more complex tasks to these type of 
// providers.


// Provider is a class that contains shared logic 
// through out the entire application. This can be
// injected as a dependency to constructor of any
// other needed class.

// Eg:-  we will inject this class to the constructor
// of 'items.controllers.ts'

import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
   private readonly itemName: string = 'rice';
   // I am planning to inject this itemName to controller
   getItem(): string {
       return this.itemName
   }
}
