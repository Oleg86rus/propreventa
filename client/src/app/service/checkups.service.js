import httpService from './http.service';

const checkupsEndPoint = 'checkups/';

const checkupsService = {
  get: async () => {
    const { data } = await httpService.get(checkupsEndPoint);
    return data;
  }
};

export default checkupsService;