import { AxiosHttpClient } from '../../../infra/https/'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
