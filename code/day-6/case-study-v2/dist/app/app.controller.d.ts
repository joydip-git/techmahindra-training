import { AppService } from './app.service';
export declare class AppController {
    private appSvc;
    constructor(appSvc: AppService);
    fetchUserByUserName(name: string): Promise<import("../infrastructure/entities/user.entity").User>;
}
