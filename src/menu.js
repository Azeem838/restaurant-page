const menu = () => {
  const content = document.getElementById('content');
  const frag = document.createDocumentFragment();

  const pastaArr = [
    'Zuppa di Zucca',
    'Salumi Misti',
    'Proscuitto e Mozzarella',
    'Radicchio',
    'Polpetti',
  ];

  const mainMeals = [
    'Trota',
    'Brodetto',
    'Chicken Milanese',
    'Tonnarelli Cacio e Pepe',
    "Bucatini all'Amatriciana",
    'Fettuccine alla Bolognese',
    'Tagliolini',
  ];

  const pastaUl = document.createElement('ul');

  pastaArr.forEach((pasta) => {
    const pastaLi = document.createElement('li');
    pastaLi.innerHTML = pasta;
    pastaUl.appendChild(pastaLi);
  });

  const pastaHead = document.createElement('h2');
  pastaHead.innerHTML = 'Pasta';

  const mainUl = document.createElement('ul');

  mainMeals.forEach((meal) => {
    const mainLi = document.createElement('li');
    mainLi.innerHTML = meal;
    mainUl.appendChild(mainLi);
  });

  const mainHead = document.createElement('h2');
  mainHead.innerHTML = 'Main Meals';

  frag.appendChild(pastaHead);
  frag.appendChild(pastaUl);
  frag.appendChild(mainHead);
  frag.appendChild(mainUl);
  content.appendChild(frag);
};

export default menu;
