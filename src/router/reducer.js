
export const isFunction = func => func && {}.toString.call(func) === '[object function]';

const actionCreator = (type, mapper) => (...data) => ({
  type,
  payload: isFunction(mapper) ? mapper(...data) : data[0]
});

export const SET_LOADING = 'SET_LOADING';

export const setLoading = actionCreator(
  SET_LOADING,
  isLoading => ({ isLoading })
);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
