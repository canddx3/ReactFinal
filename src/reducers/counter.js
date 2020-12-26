const initialState = {
  count: 0,
  numberInputted: "",
  totalClicked:0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        totalClicked: state.totalClicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        totalClicked: state.totalClicked + 1
      };
    case 'INPUT_NUMBER_CHANGE': 
      return {
        ...state,
        numberInputted: action.number 
      };
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
        numberInputted: state.numberInputted ="",
        totalClicked: state.totalClicked = 0
      }
    default:
      return state;
  }
}

export default counterReducer;