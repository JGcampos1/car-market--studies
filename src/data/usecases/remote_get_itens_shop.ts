import { ItenShop } from "../../domain/model";

import { GetItenShop } from "../../domain/usecases/get_iten_shop";
import { HttpClient } from "../protocols/http";

export class RemoteGetItenShop implements GetItenShop{
  constructor (
    private readonly url: string,
    private  httpClient: HttpClient<GetItenShop.Model[]>

  ) {}
  
 async load():Promise<GetItenShop.Model[]>  {
    
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    });
    console.log(httpResponse);
    
    return httpResponse.body!;
  
  } 
  
}
