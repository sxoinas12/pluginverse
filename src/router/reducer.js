
export const isFunction = func => func && {}.toString.call(func) === '[object function]';

const actionCreator = (type, mapper) => (...data) => ({
  type,
  payload: isFunction(mapper) ? mapper(...data) : data[0]
});

export const SET_LOADING = 'SET_LOADING';
export const SET_SUB_CATEGORY_DATA = 'SET_SUB_CATEGORY_DATA';

export const setLoading = actionCreator(
  SET_LOADING,
  isLoading => ({ isLoading })
);

export const setSubCategoryData = actionCreator(
  SET_SUB_CATEGORY_DATA,
  subCategoryData => ({ subCategoryData })
);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_SUB_CATEGORY_DATA':
      console.log('sdadadas', action.payload)
      return {
        ...state,
        subCategoryData: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
