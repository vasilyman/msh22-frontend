export const isMocked = () => process.env.VUE_APP_API_MOCKED === 'true';
export const getApiUrl = () => process.env.VUE_APP_API_URL;
export const isMockedProduct = () => process.env.VUE_APP_API_MOCKED_REPORT_DATA === 'true';
