const createMovieCard = (obj) => {
  const section = document.createElement('section');
  section.classList.add('cart');
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  section.appendChild(divContainer);

  const divImage = document.createElement('div');
  divImage.classList.add('image');
  const image = document.createElement('img');
  image.setAttribute('src', obj.src);
  divImage.appendChild(image);
  divContainer.appendChild(divImage);

  const divContent = document.createElement('div');
  divContent.classList.add('content');
  const h2Element = document.createElement('h2');
  const h2Text = document.createTextNode(obj.name);
  h2Element.appendChild(h2Text);
  divContent.appendChild(h2Element);
  divContainer.appendChild(divContent);

  const pELementDiscription = document.createElement('p');
  const pTextDiscription = document.createTextNode(obj.discription);
  pELementDiscription.appendChild(pTextDiscription);
  divContent.appendChild(pELementDiscription);

  const pElementLanguage = document.createElement('p');
  const pTextLanguage = document.createTextNode(`language:  ${obj.language}`);
  pElementLanguage.appendChild(pTextLanguage);
  divContent.appendChild(pElementLanguage);

  const pElementPremierd = document.createElement('p');
  const pTextPremierd = document.createTextNode(`premiered:  ${obj.premiered}`);
  pElementPremierd.appendChild(pTextPremierd);
  divContent.appendChild(pElementPremierd);

  const pElementEnded = document.createElement('p');
  const pTextEnded = document.createTextNode(`ended:  ${obj.ended}`);
  pElementEnded.appendChild(pTextEnded);
  divContent.appendChild(pElementEnded);

  const btnHome = document.createElement('a');
  const btnHomeText = document.createTextNode('home');
  btnHome.setAttribute('href', '../../index.html');
  btnHome.classList.add('btn');
  btnHome.classList.add('right');
  btnHome.appendChild(btnHomeText);
  divContent.appendChild(btnHome);

  const btnWatch = document.createElement('a');
  const btnWatchText = document.createTextNode('watch now!');
  btnWatch.setAttribute('href', '.#');
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

createMovieCard(data);
