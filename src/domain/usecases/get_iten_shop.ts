import {ItenShop} from '../model'
export interface GetItenShop {
  load: () => Promise<GetItenShop.Model[]>
}

export namespace GetItenShop{
  export type Model = ItenShop;
}
