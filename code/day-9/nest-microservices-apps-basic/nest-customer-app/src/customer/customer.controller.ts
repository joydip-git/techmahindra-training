import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AddCustomerCommand } from './commands/add-customer.command';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private service: CustomerService, @Inject('CUSTOMER-SERVICE') private client: ClientProxy) {

    }
    @Post('/add')
    async create(@Body() data: AddCustomerCommand) {
        const response = await this.service.addCustomer(data)
        const { email, password, username } = response
        //send message/firee event to pass data to other MS
        this.client.emit({ eventname: 'add_customer' }, { email: email, password: password, username: username })
        return response
    }
}
