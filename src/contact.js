const contact = () => {
  const content = document.getElementById('content');

  const location = document.createElement('h2');
  const phoneNum = document.createElement('h2');
  const openHours = document.createElement('h2');

  location.innerHTML = 'Location<p>2 Lexington Avenue, New York, NY 10010</p>';

  phoneNum.innerHTML = 'Call us<p>212.777.2410</p>';

  openHours.innerHTML = 'Open Hours<p>Mon-Fri: 11AM-11pm</p>';

  content.appendChild(location);
  content.appendChild(phoneNum);
  content.appendChild(openHours);
};

export default contact;
