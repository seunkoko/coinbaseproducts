// store
import store from '../../store';

describe('Store', () => {
  it('passes dispatch and getState', () => {
    expect(typeof store.dispatch).toBe('function');
    expect(typeof store.getState).toBe('function');
  });
});
