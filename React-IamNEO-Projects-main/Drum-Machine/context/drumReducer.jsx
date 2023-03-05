import { POWER_TOGGLE, CHANGE_VOLUME } from "../types";

export default (state, action) => {
  switch (action.type) {
    case POWER_TOGGLE:
      return {
        ...state,
        power: !state.power
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.payload
      };

    default:
      return state;
  }
};
