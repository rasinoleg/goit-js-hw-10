import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_6jqmncwJ62D0y02eKx0d0xnekMPiNckDNX0u2Jkc13hysBFoleh9JcRlUrRk9kuP';

  const API_KEY = "live_6jqmncwJ62D0y02eKx0d0xnekMPiNckDNX0u2Jkc13hysBFoleh9JcRlUrRk9kuP";
  const URL = "https://api.thecatapi.com/v1/breeds";
  const URL1 = "https://api.thecatapi.com/v1/images/search";
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
  
    return axios.get(URL1, { params })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error("Failed to fetch cat by breed");
      });
  }
  
  export {fetchBreeds, fetchCatByBreed};

















// const url = 'https://api.thecatapi.com/v1';
// const api_key = "llive_6jqmncwJ62D0y02eKx0d0xnekMPiNckDNX0u2Jkc13hysBFoleh9JcRlUrRk9kuP";

// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });       
// };

// export function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  
// };
