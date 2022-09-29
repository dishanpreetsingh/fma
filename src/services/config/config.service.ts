import { Transport } from "@nestjs/microservices";

export class ConfigService {
    private readonly envConfig: { [key:string]: any} = null;

    constructor(){
        this.envConfig = {};
        this.envConfig.port = process.env.PORT || 5000;
        this.envConfig.userService = {
            options: {
                port: process.env.PORT || 5002,
                host: process.env.USER_SERVICE_HOST || '127.0.0.1',
            },
            transport: Transport.TCP
        },
        this.envConfig.categoryService = {
            options: {
                port: process.env.PORT || 5003,
                host: process.env.CATEGORY_SERVICE_HOST || '0.0.0.0'
            },
            transport: Transport.TCP
        },
        this.envConfig.expenseService = {
            options: {
                port: process.env.PORT || 5004,
                host: process.env.EXPENSE_SERVICE_HOST || '0.0.0.0'
            },
            transport: Transport.TCP
        },
        this.envConfig.incomeService = {
            options: {
                port: process.env.PORT || 5005,
                host: process.env.INCOME_SERVICE_HOST || '0.0.0.0'
            },
            transport: Transport.TCP
        }

    }

    get(key:string){
        return this.envConfig[key];
    }
}