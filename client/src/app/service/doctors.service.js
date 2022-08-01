import httpService from './http.service';

const doctorsEndPoint = 'doctors/';

const doctorsService = {
  get: async () => {
    const { data } = await httpService.get(doctorsEndPoint);
    return data;
  }
};

export default doctorsService;