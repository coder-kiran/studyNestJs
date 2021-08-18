// Controller
// Controller is responsible for handling  incoming requests and
// returning  responses to client

import { Controller, Get } from '@nestjs/common';

// This is a decorator.( eg:- @Controller)
// This just extends(inherits) functionality of classes & methods
// in a  clean way. 

// Here items act like a router. It can also have subrouters or endpoints
// with the help of decoratives like
// GET, POST, PUSH,.. etc

@Controller('items')
export class ItemsController {
    
    @Get('details')
    getItem(): string{
        return 'get all items';
    }

}
