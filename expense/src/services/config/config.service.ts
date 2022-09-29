export class ConfigService {
    private readonly envConfig: { [key:string]: any } = null;
    constructor(){
        this.envConfig ={
            port: process.env.PORT || 5004
        }
        this.envConfig.baseUri = process.env.BASE_URI || "0.0.0.0";
        this.envConfig.gatewayPort = process.env.PORT || 5000;
    }
    get(key:string){
        return this.envConfig[key]
    }
}