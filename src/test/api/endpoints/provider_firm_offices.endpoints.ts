export const ProviderFirmOfficesEndpoints = {

  providerOffices: (officeCode: string) =>
    `/api/v1/provider-offices/${officeCode}`,  
  
  contracts: (officeCode: string) =>
    `/api/v1/provider-offices/${officeCode}/contracts`,  

  officeContractDetails: (officeCode: string) =>
    `/api/v1/provider-offices/${officeCode}/office-contract-details`,  

  providerUsers: (officeCode: string) =>
    `/api/v1/provider-offices/${officeCode}/provider-users`,  

  schedules: (officeCode: string) =>
    `/api/v1/provider-offices/${officeCode}/schedules`,  

  snapshot: (officeCode: string) =>
    `/api/v1/provider-offices/snapshot`,  
};
