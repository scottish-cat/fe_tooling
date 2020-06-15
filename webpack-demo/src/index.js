import join from 'lodash/join';
import './style.css';
import Icon from './icon.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const br = document.createElement('br');
  element.appendChild(br);

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 500;
  element.appendChild(myIcon);

  return element;
}
  
document.body.appendChild(component());
