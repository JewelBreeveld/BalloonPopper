import { START_GAME_SUCCES } from "../actions/games";

const games = (state = null, action = {}) => {
  switch (action.type) {
    case START_GAME_SUCCES:
      console.log("state", state);
      return action.game;

    default:
      return state;
  }
};

export default games;
