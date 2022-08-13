const url = window.location.href;
const movieName = url.split('=')[1];

const getMovie = (movieName) => {
  const endpoint = `https://api.tvmaze.com/search/shows?q=${movieName}`;
  fetch('GET', endpoint, '', cb);
};

const cb = (data) => {
  const obj = JSON.parse(JSON.stringify(data));
  console.log(obj);
  createMovieCard(obj[0]);
};

getMovie(movieName);

const createMovieCard = (obj) => {
  console.log(obj);
  const section = document.createElement('section');
  section.classList.add('cart');
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  section.appendChild(divContainer);

  const divImage = document.createElement('div');
  divImage.classList.add('image');
  const image = document.createElement('img');
  image.setAttribute('src', obj.show.image.original);
  divImage.appendChild(image);
  divContainer.appendChild(divImage);

  const divContent = document.createElement('div');
  divContent.classList.add('content');
  const h2Element = document.createElement('h2');
  const h2Text = document.createTextNode(obj.show.name);
  h2Element.appendChild(h2Text);
  divContent.appendChild(h2Element);
  divContainer.appendChild(divContent);

  const pELementDiscription = document.createElement('p');
  pELementDiscription.innerHTML = obj.show.summary;
  divContent.appendChild(pELementDiscription);

  const pElementLanguage = document.createElement('p');
  const pTextLanguage = document.createTextNode(`Genre:  ${obj.show.genres[0]}`);
  pElementLanguage.appendChild(pTextLanguage);
  divContent.appendChild(pElementLanguage);

  const pElementPremierd = document.createElement('p');
  const pTextPremierd = document.createTextNode(`premiered:  ${obj.show.premiered}`);
  pElementPremierd.appendChild(pTextPremierd);
  divContent.appendChild(pElementPremierd);

  const pElementEnded = document.createElement('p');
  const pTextEnded = document.createTextNode(`Rating:  ${obj.show.rating.average}`);
  pElementEnded.appendChild(pTextEnded);
  divContent.appendChild(pElementEnded);

  const btnHome = document.createElement('a');
  const btnHomeText = document.createTextNode('Offical Site');
  btnHome.setAttribute('href', obj.show.officialSite);
  btnHome.classList.add('btn');
  btnHome.classList.add('right');
  btnHome.appendChild(btnHomeText);
  divContent.appendChild(btnHome);

  const btnWatch = document.createElement('a');
  const btnWatchText = document.createTextNode('watch now!');
  btnWatch.setAttribute('href', obj.show.url);
  btnWatch.classList.add('btn');
  btnWatch.classList.add('right');
  btnWatch.appendChild(btnWatchText);
  divContent.appendChild(btnWatch);

  const card = document.createElement('div');
  card.classList.add('card');
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('container');
  card.appendChild(cardContainer);

  for (let i = 0; i <= 4; i++) {
    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');
    const imageCard = document.createElement('img');
    imageCard.setAttribute('src', obj.src);
    cardImageDiv.appendChild(imageCard);
    cardContainer.appendChild(cardImageDiv);
  }

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(section);
  body.appendChild(card)
};

const data = {
  name: 'Name film',
  src: 'https://pic.i7lm.com/wp-content/uploads/2019/10/Robin-Hood-%D8%A7%D8%AC%D9%85%D9%84-%D8%B5%D9%88%D8%B1-%D8%A7%D9%83%D8%B4%D9%86-%D8%A7%D8%AC%D9%86%D8%A8%D9%8A.jpg',
  discription: 'Lorem ipsum dolor cvkljbhlkdhbkjhbdkjhbdkjbkjhklsit amet, consectetur adipisicing elit. Eligendi et exercitationem aperiam?',
  language: 'English',
  premiered: '2011-09-20',
  ended: '2011-09-20',
};


