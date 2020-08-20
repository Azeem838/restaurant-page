const contact = () => {
  const content = document.getElementById('content');
  const frag = document.createDocumentFragment();

  const location = document.createElement('h2');
  const phoneNum = document.createElement('h2');
  const openHours = document.createElement('h2');

  location.innerHTML = 'Location<p>2 Lexington Avenue, New York, NY 10010</p>';

  phoneNum.innerHTML = 'Call us<p>212.777.2410</p>';

  openHours.innerHTML = 'Open Hours<p>Mon-Fri: 11AM-11pm</p>';

  frag.appendChild(location);
  frag.appendChild(phoneNum);
  frag.appendChild(openHours);
  content.appendChild(frag);
};

export default contact;
