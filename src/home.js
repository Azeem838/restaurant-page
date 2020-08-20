const homePage = (() => {
  const content = document.getElementById('home');

  const subHeading = document.createElement('h3');
  subHeading.innerHTML =
    'Chef Rob Hanzer perfectly cooks chickens in a giant rotisserie oven, but the birds are equally delicious roasted on a rack in a home oven.';

  const desc = document.createElement('p');
  desc.innerHTML =
    'Located in the Gramercy Park Hotel, Maialino captures the warmth and comfort of a Roman trattoria, with a menu that reflects the rich cultures of both Rome and New York. <br /> Executive Chef Matt Spivey draws inspiration from the Roman cooking tradition to create soulful food that celebrates the restaurant’s ongoing relationship with its local family of farmers and suppliers.';

  const image = document.createElement('img');
  image.setAttribute('src', './roast-chicken.jpg');

  content.appendChild(image);
  content.appendChild(subHeading);
  content.appendChild(desc);
})();

export default homePage;
