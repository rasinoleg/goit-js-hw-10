import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import './style.css';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedSelect.setAttribute('id', 'single');
loader.textContent = '';
error.classList.add('is-inactive');
breedSelect.classList.add('is-inactive');

let arrBreedsId = [];

fetchBreeds()
  .then(breeds => {
    arrBreedsId = breeds.map(element => ({ text: element.name, value: element.id }));

    arrBreedsId.forEach(breed => {
      const newOption = document.createElement('option');
      newOption.textContent = breed.text;
      newOption.value = breed.value;
      breedSelect.appendChild(newOption);
    });

    const slimSelect = new SlimSelect(breedSelect);
    slimSelect.onChange = selected => {
      const selectedValue = selected[0].value;
      loadCatByBreed(selectedValue);
    };

    // Load cat information for the initial selected breed
    const selectedValue = breedSelect.value;
    loadCatByBreed(selectedValue);
  })
  .catch(error => {
    console.error('Failed to fetch breeds:', error);
    error.classList.remove('is-inactive');
    error.textContent = 'Failed to fetch breeds.';
  });

function loadCatByBreed(breedId) {
  loader.textContent = 'Loading...';
  catInfo.textContent = '';

  fetchCatByBreed(breedId)
    .then(cat => {
      loader.textContent = '';

      if (cat) {
        const catImage = document.createElement('img');
        catImage.src = cat.imageUrl;
        catImage.alt = cat.name;
        catInfo.appendChild(catImage);
      } else {
        Notify.failure('Failed to load cat information.');
      }
    })
    .catch(error => {
      console.error('Failed to fetch cat:', error);
      loader.textContent = '';
      Notify.failure('Failed to load cat information.');
    });
}




// import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import  SlimSelect  from 'slim-select';
// import './style.css';
// import 'slim-select/dist/slimselect.css'
// const breedSelect = document.querySelector('.breed-select');
// const loader = document.querySelector('.loader');
// const error = document.querySelector('.error');
// const catInfo = document.querySelector('.cat-info');

// breedSelect.setAttribute('id', 'single');
// loader.textContent = '';
// error.classList.add('is-inactive');
// breedSelect.classList.add('is-inactive');

// let arrBreedsId = [];

// fetchBreeds().then(breeds => {
//   breeds.forEach(element => {
//     arrBreedsId.push({ text: element.name, value: element.id });
//   });
//   arrBreedsId.forEach(breed => {
//     const newOption = document.createElement('option');
//     newOption.textContent = breed.text;
//     newOption.value = breed.value;
//     breedSelect.appendChild(newOption);
//   });
// });
// breedSelect.addEventListener('change', event => {
//     const selectedValue = event.target.value;
//     loadCatByBreed(selectedValue);
//   });


  





