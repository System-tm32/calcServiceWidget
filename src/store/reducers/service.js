import typeConst from '../constants';

const initilaState = {
  service: [],
};

const service = (state = initilaState, action) => {
  switch (action.type) {
    case typeConst.FETCH_SERVICES:
      return { ...state, service: action.payload };

    default:
      return state;
  }
};

export default service;
