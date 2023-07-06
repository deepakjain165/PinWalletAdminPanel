import axios from 'axios';
const ApiService = axios.create({
    withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});
// Add a request interceptor
ApiService.interceptors.request.use((config) => {
  // Add the timestamp to the headers of the API request
  config.headers['X-Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return config;
});

// Add a response interceptor
ApiService.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    // const { status } = error?.response;
    // console.log(error,"status");
    //   if (status && status >= 400 && status < 500) {
    //   message.open(messageConfiguration("error",error?.response.data.message??error?.response.data.error,3))
    // }else if(status && status >= 500 ){
    //   message.open(messageConfiguration("error",error?.response.data.message??error?.response.data.error,3))
    // }
  }
);

export default ApiService;