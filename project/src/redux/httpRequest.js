import axios from 'axios';
export default {
   apiKey: () => '1755983F-E919-4039-8296-46FD27D70760',
   address: (url) => `http://ecommerce-api.devthailand.com/Api${url}`,
   requestGet(url) {
      return axios.get(this.address(url))
            .then(res => res.data)
            .catch(res => { throw res.response.data });
   },
   requestPost(url, data) {
      return axios.post(this.address(url), data)
            .then(res => res.data)
            .catch(res => { throw res.response.data });
   }
}
