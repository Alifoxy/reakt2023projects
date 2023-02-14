import {AxiosResponse} from 'axios';

export type IResp<Data> = Promise<AxiosResponse<Data>>