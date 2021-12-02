import { HttpRequest, HttpResponse, HttpClient } from '../../../data/protocols/http'

import axios, { AxiosResponse} from 'axios'

export class AxiosHttpClient implements HttpClient {
  
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    //TODO:: nn consigo colocar dentro de um try catch nn encontra o erro no axios;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      throw Error()
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}