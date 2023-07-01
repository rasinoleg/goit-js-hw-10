import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_6jqmncwJ62D0y02eKx0d0xnekMPiNckDNX0u2Jkc13hysBFoleh9JcRlUrRk9kuP';

  const API_KEY = "live_6jqmncwJ62D0y02eKx0d0xnekMPiNckDNX0u2Jkc13hysBFoleh9JcRlUrRk9kuP";
  const URL = "https://api.thecatapi.com/v1/breeds";
  
  function fetchBreeds() {
    return axios.get(URL)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error("Failed to fetch breeds");
      });
  }
  function fetchCatByBreed(breedId) {
    const params = {
      breed_ids: breedId
    };
  
    return axios.get(URL, { params })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error("Failed to fetch cat by breed");
      });
  }
  
  export {fetchBreeds, fetchCatByBreed};
