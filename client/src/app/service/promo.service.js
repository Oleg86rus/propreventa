import httpService from './http.service';

const promoEndPoint = 'promo/';

const promoService = {
  get: async () => {
    const { data } = await httpService.get(promoEndPoint);
    return data;
  }
};

export default promoService;