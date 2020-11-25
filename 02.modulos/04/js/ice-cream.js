import { makeIceCream } from './ice-cream-machine.js  ';

function selectFlavor() {
  this.classList.toggle('is-active');
}

const $flavors = document.querySelectorAll('.flavor');
$flavors.forEach(($el) => $el.addEventListener('click', selectFlavor));

window.btn.addEventListener('click', () => {
  const $flavors = document.querySelectorAll('.flavor.is-active');
  try {
    makeIceCream($flavors[0], $flavors[1]);
  } catch (error) {
    alert('Aun no completa los sabores para preparar tu helado.');
  }
});
