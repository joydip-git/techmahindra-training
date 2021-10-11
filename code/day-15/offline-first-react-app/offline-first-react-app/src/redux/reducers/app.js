const initialState = {
  id: "",
};

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return (state = {
        ...state,
        todoItem: action.payload.content
      });
    case "Offline/STATUS_CHANGED":
      return (state = {
        ...state,
        status: action.payload.online
      });
    default:
      return state;
  }
};
export default addTodoReducer
