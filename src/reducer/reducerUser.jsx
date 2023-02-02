import _, { clone } from "lodash";
const initialState = [];

export const reducerUser = (state = initialState, action) => {
  const cloneState = _.cloneDeep(state);
  switch (action.type) {
    case "INIT_USER":
      return action.payload;
    default:
      return state;
  }
};
