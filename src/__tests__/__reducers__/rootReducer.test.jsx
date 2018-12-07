// reducer
import reducer from '../../reducers/rootReducer';

const products = {
  data: [],
  error: {},
  pending: false,
};
const stats = {
  data: {},
  error: {},
  pending: false,
};
const initialState = {
  products,
  stats,
};

describe('Root Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });
});
