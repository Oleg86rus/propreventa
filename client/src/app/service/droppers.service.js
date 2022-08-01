import httpService from './http.service';

const droppersEndPoint = 'droppers/';

const droppersService = {
  get: async () => {
    const { data } = await httpService.get(droppersEndPoint);
    return data;
  }
};

export default droppersService;