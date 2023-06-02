import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'user',
  initialState: {
    authenticated: true,
    user: {
      token: 'Test',
    },
  },
  reducers: {
    login(state, action) {
      state.authenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.authenticated = false;
      state.user = null;
    }
  },
});

export { actions as userActions };
export { reducer as userReducer };
