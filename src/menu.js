const menu = (() => {
  const content = document.getElementById('menu');

  const pastaArr = [
    'Zuppa di Zucca',
    'Salumi Misti',
    'Proscuitto e Mozzarella',
    'Radicchio',
    'Polpetti',
  ];

  const pastaUl = document.createElement('ul');

  pastaArr.forEach((pasta) => {
    const pastaLi = document.createElement('li');
    pastaLi.innerHTML = pasta;
    pastaUl.appendChild(pastaLi);
  });

  console.log(content);

  content.appendChild(pastaUl);
})();

export default menu;
