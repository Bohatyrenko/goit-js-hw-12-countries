import '../src/styles.css';
import countryTmp from '../src/country-card.hbs';
import API from '../src/js/api-service';
import getRefs from '../src/js/get-refs';

const refs = getRefs();

refs.search.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const formInput = e.currentTarget;
  const searchValue = formInput.elements.query.value;

  API.fetchCountry(searchValue)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => formInput.reset());
}

function renderCountryCard(country) {
  const markup = countryTmp(country);
  refs.card.innerHTML = markup;
}

function onFetchError(error) {
  alert('Такой страны не найдено!!!');
}
