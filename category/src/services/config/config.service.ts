export class ConfigService {
    private readonly envConfig: { [key:string]: any} = null;

    constructor(){
        this.envConfig = {
            port: process.env.CATEGORY_SERVICE_PORT || 5003
        }
        this.envConfig.baseUri = process.env.BASE_URI || "0.0.0.0";
        this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT || 5000;
    }

    get(key:string) {
        return this.envConfig[key]
    }
}