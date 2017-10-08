export const actionTypes = {
    CHANGE_FILTER: 'CHANGE_VISIBILITY_FILTER',
    UPDATE_LIST: 'UPDATE_LIST',
    UPDATE_INPUT_FIELD_TODO_VALUE: 'UPDATE_INPUT_FIELD_TODO_VALUE',
    CLEAR_INPUT_FIELD_TODO_VALUE: 'CLEAR_INPUT_FIELD_TODO_VALUE',
  };
  
  export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  };
  
  export const updateList =
    data => ({
      type: actionTypes.UPDATE_LIST,
      data,
    });
  
  export const changeVisibilityFilter =
    data => ({
      type: actionTypes.CHANGE_VISIBILITY_FILTER,
      visibilityFilter: data,
    });
  
  export const updateInputFieldTodoValue =
    data => ({
      type: actionTypes.UPDATE_INPUT_FIELD_TODO_VALUE,
      data,
    });
  
  export const clearInputFieldTodoValue =
    () => ({
      type: actionTypes.CLEAR_INPUT_FIELD_TODO_VALUE,
      data: '',
    });
  
  const initialState = {
    list: [],
    visibilityFilter: 'SHOW_ALL',
    inputFieldTodoValue: '',
  };
  
  export const reducer =
    (state = initialState, action) => {
      switch (action.type) {
        case actionTypes.UPDATE_LIST:
          return { ...state, list: action.data };
        case actionTypes.CHANGE_VISIBILITY_FILTER:
          return { ...state, visibilityFilter: action.data };
        case actionTypes.UPDATE_INPUT_FIELD_TODO_VALUE:
          return { ...state, inputFieldTodoValue: action.data };
        case actionTypes.CLEAR_INPUT_FIELD_TODO_VALUE:
          return { ...state, inputFieldTodoValue: action.data };
        default:
          return state;
      }
    };
  
  export default reducer;