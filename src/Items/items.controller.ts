// Controller
// Controller is responsible for handling  incoming requests and
// returning  responses to client

import { Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

// This is a decorator.( eg:- @Controller)
// This just extends(inherits) functionality of classes & methods
// in a  clean way. 

// Here items act like a router. It can also have subrouters or endpoints
// with the help of decoratives like
// GET, POST, PUSH,.. etc

@Controller('items')
export class ItemsController {
    constructor(private readonly itemFromService: ItemsService){}
    
    @Get('details')         // http://localhost:3000/items/details
    getItem(): string{
        return 'get all items';
    }

    @Post('add')          //  http://localhost:3000/items/add
    postItem(): string{
        return 'succesfully posted'
    }

    @Get('itemfromservice')             
    serviceItem(): string{
        return this.itemFromService.getItem();
    }

}