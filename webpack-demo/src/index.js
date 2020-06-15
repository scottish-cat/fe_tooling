import join from 'lodash/join';
import printMe from './example.js';

import './style.css';
import Icon from './icon.jpg';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  element.appendChild(document.createElement('br'));

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 500;
  element.appendChild(myIcon);

  element.appendChild(document.createElement('br'));

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}
 
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./example.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
