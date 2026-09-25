export const ProviderFirmOfficesEndpoints = {

  providerOfficesOfficeCode: (officeCode: number | string) =>
    `/api/v1/provider-offices/${officeCode}`,  
  
  schedules: (officeCode: number | string) =>
    `/api/v1/provider-offices/${officeCode}/schedules`,
};
