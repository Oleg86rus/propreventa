import httpService from './http.service';

const ultrasoundsEndPoint = 'ultrasounds/';

const ultrasoundsService = {
  get: async () => {
    const { data } = await httpService.get(ultrasoundsEndPoint);
    return data;
  }
};

export default ultrasoundsService;