import { Injectable } from "@nestjs/common";
import { Constants } from "src/constants";
import { ConfigurationService } from "../configuration/configuration.service";

@Injectable()
export class AppService {
    constructor(private configService: ConfigurationService) {

    }
    getInfo(): string {
        return this.configService.get(Constants.DATABASE)
    }
}