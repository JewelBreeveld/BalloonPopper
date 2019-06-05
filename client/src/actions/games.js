import * as request from "superagent";

const baseUrl = "http://localhost:4000";

export const START_GAME_SUCCES = "START_GAME_SUCCES";

const startGameSucces = game => ({
  type: START_GAME_SUCCES,
  game
});

export const startGame = data => dispatch => {
  request
    .post(`${baseUrl}/games`)
    .send(data)
    .then(response => {
      dispatch(startGameSucces(response.body));
    })
    .catch(console.error);
};
