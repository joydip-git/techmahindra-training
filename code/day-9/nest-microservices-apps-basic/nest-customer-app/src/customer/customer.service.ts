import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddCustomerCommand } from './commands/add-customer.command';
import { CustomerModule } from './customer.module';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private repo: Repository<Customer>) {

    }
    addCustomer(customerData: AddCustomerCommand) {
        const customer = this.repo.create({
            city: customerData.city,
            name: customerData.name,
            email: customerData.email,
            mobile: customerData.mobile,
            password: customerData.password,
            username: customerData.username
        })
        return this.repo.save(customer)
    }
}
