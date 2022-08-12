const searchBar = document.getElementById('searchBar');

const printResults = (data) => {
  console.log(data);
};

searchBar.addEventListener('input', (e) => {
  const data = e.target.value;
  fetch('POST', '/seriee-search', data, printResults);
});
