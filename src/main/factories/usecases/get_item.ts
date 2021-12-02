import { RemoteGetItenShop } from "../../../data/usecases/remote_get_itens_shop";
import { GetItenShop } from "../../../domain/usecases";
import { makeShopUrl ,makeAxiosHttpClient} from "../htpp";


export const makeRemoteGetItem = (item: number): GetItenShop =>
  new RemoteGetItenShop(makeShopUrl(), makeAxiosHttpClient())
