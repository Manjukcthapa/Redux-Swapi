import /* we need our action types here*/{ FETCH_CHARS_START,FETCH_CHARS_SUCCESS,FETCH_CHARS_FAILURE}  from "../actions";
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

    case FETCH_CHARS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
      case FETCH_CHARS_SUCCESS:
        return{
          ...state,
          isFetching:false,
          error:action.payload

        }
        case FETCH_CHARS_FAILURE:
        return{
          ...state,
          isFetching:false,
          error:action.payload
        
        }



    default:
      return state;
  }
};

