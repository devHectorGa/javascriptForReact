import store from './store.js';
import { BURN } from './actions/index.js';

store.subscribe(() => {
  const { calorics, clicks } = store.getState();
  window.result.textContent = `Haz quemado ${calorics.toFixed(
    2
  )} calorías, te faltan ${clicks} clicks`;
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  });
};
window.addEventListener('click', burn);
