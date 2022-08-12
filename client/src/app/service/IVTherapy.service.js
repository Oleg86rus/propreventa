import httpService from './http.service';

const droppersEndPoint = 'IVTherapy/';

const IVTherapyesService = {
  get: async () => {
    const { data } = await httpService.get(droppersEndPoint);
    return data;
  }
};

export default IVTherapyesService;