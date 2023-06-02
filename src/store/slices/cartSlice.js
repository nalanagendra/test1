import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {},
});

export { actions as cartActions };
export { reducer as cartReducer };