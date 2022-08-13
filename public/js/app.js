const searchBar = document.getElementById('searchBar');
const seriesDataList = document.getElementById('series');
const searchBtn = document.getElementById('searchBtn');

const printResults = (suggestionsList) => {
  suggestionsList.forEach((seriee, index) => {
    index < 6 ? createOption(seriee) : '';
  });
};

const errorMessages = (message) => {
  const errorContainer = document.createElement('section');
  errorContainer.classList.add('error-container');

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error');
  errorMessage.textContent = message;
  errorContainer.appendChild(errorMessage);

  const form = document.getElementById('form');
  form.appendChild(errorContainer);
};

const removeError = () => {
  const errorContainer = document.querySelector('.error-container');
  if (errorContainer) {
    errorContainer.remove();
  }
};

searchBar.addEventListener('input', (e) => {
  removeError();
  const data = e.target.value;
  seriesDataList.textContent = '';
  fetch('POST', '/seriee-search', data, printResults);
});

const cb = (data) => {
  if (data.status === 'true') {
    window.location = `/series?name=${data.data}`;
  } else {
    errorMessages('Show isn\'t found');
  }
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeError();
  const searchTerm = searchBar.value;
  if (searchTerm === '') errorMessages('Please Provide a Tv Show name before Submiting');
  else {
    fetch('POST', '/check-search', searchTerm, cb);
  }
});

const createOption = (data) => {
  const element = document.createElement('option');
  element.textContent = data;
  element.classList.add = 'seriee-option';
  seriesDataList.appendChild(element);
};
