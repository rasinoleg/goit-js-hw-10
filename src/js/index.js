import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
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

fetchBreeds().then(breeds => {
  breeds.forEach(element => {
    arrBreedsId.push({ text: element.name, value: element.id });
  });
  arrBreedsId.forEach(breed => {
    const newOption = document.createElement('option');
    newOption.textContent = breed.text;
    newOption.value = breed.value;
    breedSelect.appendChild(newOption);
  });
  new SlimSelect({
    select: '#single',
  });
});

breedSelect.addEventListener('change', event => {
  catInfo.innerHTML = '';
  const selectedValue = event.target.value;
  fetchCatByBreed(selectedValue).then(breed => {
    const img = document.createElement('img');
    img.src = breed[0].url;
    img.width = 300;
    catInfo.appendChild(img);
    const div = document.createElement('div');
    div.textContent = breed[0].breeds[0].description;
    catInfo.appendChild(div);
  });
});
Notiflix.Notify.init();

 

