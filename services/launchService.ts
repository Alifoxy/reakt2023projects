import {apiService} from './apiService';

import {ILaunch} from '../interfaces/launchInterface';

import {IResp} from '../interfaces/respInterface';

const launchService = {
    getAll:():IResp<ILaunch[]> => apiService.get('/launches')
}

export {
    launchService
}
