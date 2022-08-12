const searchBar = document.getElementById('searchBar');
const seriesDataList = document.getElementById('series');

const printResults = (suggestionsList) => {
  suggestionsList.forEach((seriee, index) => {
    index < 6 ? createOption(seriee) : '';
  });
};

searchBar.addEventListener('input', (e) => {
  const data = e.target.value;
  seriesDataList.textContent = '';
  fetch('POST', '/seriee-search', data, printResults);
});

const createOption = (data) => {
  const element = document.createElement('option');
  element.textContent = data;
  element.classList.add = 'seriee-option';
  seriesDataList.appendChild(element);
};
