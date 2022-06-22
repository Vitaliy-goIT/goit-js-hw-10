import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const inpetEl = document.querySelector('#search-box');

inpetEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  evt.preventDefault();
  let value = evt.target.value.trim();
  if (evt.target.value != '') {
    fetchCountries(value);
  }
}
