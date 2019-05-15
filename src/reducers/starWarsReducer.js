import /* we need our action types here*/{ FETCH_CHARS_START,FETCH_CHARS_SUCCESS,FEATCH_CHARS_SUCCESS}  from"../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching:false,
  error:null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
