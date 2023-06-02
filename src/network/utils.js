/* eslint-disable import/prefer-default-export */

import API from './index';

const setAuthToken = (token) => {
  API.getInstance().setBearerToken(token);
};

export {
  setAuthToken,
};
