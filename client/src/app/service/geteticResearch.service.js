import httpService from './http.service';

const geneticResearchEndPoint = 'geneticResearch/';

const geneticResearchService = {
  get: async () => {
    const { data } = await httpService.get(geneticResearchEndPoint);
    return data;
  }
};

export default geneticResearchService;