import { BURN } from '../actions/index.js';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      return {
        calorics: state.calorics + payload,
        clicks: state.clicks - 1,
      };
    default:
      return state;
  }
};

export default reducer;
