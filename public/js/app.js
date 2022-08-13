const searchBar = document.getElementById('searchBar');
const seriesDataList = document.getElementById('series');
const searchBtn = document.getElementById('searchBtn');

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

const cb = (data) => {
  console.log(data);
};

searchBtn.addEventListener('click', (e) => {
  const searchTerm = searchBar.value;
  const searchTermOptimized = searchTerm.replace(/\s/g, '%20').toLowerCase();
  const endpoint = `https://api.tvmaze.com/search/shows?q=${searchTermOptimized}`;
  fetch('GET', endpoint, cb);
});

const createOption = (data) => {
  const element = document.createElement('option');
  element.textContent = data;
  element.classList.add = 'seriee-option';
  seriesDataList.appendChild(element);
};
