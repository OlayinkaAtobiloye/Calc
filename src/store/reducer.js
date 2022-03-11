const initialState = {
  theme: 1,
  operand1: null,
  operand2: null,
  operator: null,
  display: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    case "SET_OPERAND":
      if (!state.operator) {
        let temp = state.operand1
          ? state.operand1 + action.value
          : action.value;
        return {
          ...state,
          operand1: temp,
          display: temp,
        };
      }
      let temp = state.operand2 ? state.operand2 + action.value : action.value;
      return {
        ...state,
        operand2: temp,
        display: `${state.operand1} ${state.operator} ${temp}`,
      };
    case "SET_OPERATOR":
      if (!state.operand2) {
        return {
          ...state,
          operator: action.operator,
          display: `${state.operand1} ${action.operator}`,
        };
      } else {
        let num1 = Number(state.operand1);
        let num2 = Number(state.operand2);
        let result =
          state.operator === "-"
            ? num1 - num2
            : state.operator === "*"
            ? num1 * num2
            : state.operator === "+"
            ? num1 + num2
            : num1 / num2;
        return {
          ...state,
          operand1: result,
          operator: action.operator,
          operand2: null,
          display: `${result} ${action.operator}`,
        };
      }
    case "SHOW_RESULT":
      if (!state.operand2) {
        return {
          ...state,
          display: state.operand1,
          operator: null,
          operand2: null,
        };
      }
      let num1 = Number(state.operand1);
      let num2 = Number(state.operand2);
      let result =
        state.operator === "-"
          ? num1 - num2
          : state.operator === "*"
          ? num1 * num2
          : state.operator === "+"
          ? num1 + num2
          : num1 / num2;
      return {
        ...state,
        operand1: result,
        // display: `${result} ${action.operator}`,
        display: result,
        operator: null,
        operand2: null,
      };

    case "RESET":
      return initialState;

    case "DELETE":
      if (state.operand2) {
        return {
          ...state,
          operand2: state.operand2.slice(0, -1),
          display: state.display.slice(0, -1),
        };
      } else if (state.operator) {
        return {
          ...state,
          operator: null,
          display: state.operand1,
        };
      } else {
        return {
          ...state,
          operand1: state.operand1.slice(0, -1),
          display: state.display.slice(0, -1),
        };
      }
  }

  return state;
};

export default Reducer;
