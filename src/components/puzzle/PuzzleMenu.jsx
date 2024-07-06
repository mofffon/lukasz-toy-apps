import config from "./config.json";

const PuzzleMenu = ({
  startResetGame,
  currentPicture,
  nextPicture,
  previousPicture,
  gameState,
}) => {
  if (gameState === config.gameStates[0])
    return (
      <div className="puzzleMenu">
        <button onClick={startResetGame}> Start / Reset</button>
        <button onClick={previousPicture}>Previous</button>
        <button onClick={nextPicture}>Next</button>
        <span>{currentPicture.replace("_", " ")}</span>
      </div>
    );
  else if (gameState === config.gameStates[1]) {
    return (
      <div className="puzzleMenu">
        <button onClick={startResetGame}> Start / Reset</button>
        <button onClick={previousPicture} disabled>
          Previous
        </button>
        <button onClick={nextPicture} disabled>
          Next
        </button>
        <span>{currentPicture.replace("_", " ")}</span>
      </div>
    );
  }
};

export default PuzzleMenu;
