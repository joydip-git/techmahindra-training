import { Controller, } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserMessage } from './customer.message';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private service: CustomerService) {

    }

    @EventPattern({ eventname: 'add_customer' })
    async create(data: UserMessage) {
        this.service.addCustomer(data)
        console.log(data)
    }
}
