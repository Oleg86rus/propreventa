import httpService from './http.service';

const checkupsEndPoint = 'checkups/';

const checkupsService = {
  get: async () => {
    const { data } = await httpService.get(checkupsEndPoint);
    return data;
  },
  create: async (payload) => {
    const {data} = await httpService.post(checkupsEndPoint, payload);
    console.log(payload);
    return data;
  },
  remove: async (checkupId) => {
    const {data} = await httpService.delete(checkupsEndPoint + checkupId);
    return data;
  }
};

export default checkupsService;