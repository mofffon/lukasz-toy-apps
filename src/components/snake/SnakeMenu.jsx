import config from "./config.json";

const SnakeMenu = ({
  gameStart,
  movesCount,
  gamePause,
  gameScore,
  selectDifficulty,
  gameState,
}) => {
  if (gameState === config.gameStates[0]) {
    return (
      <div className="menuGrid">
        <button onClick={gameStart}>Start</button>
        <button onClick={gamePause} disabled>
          Pause
        </button>
        <select onChange={selectDifficulty}>
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        <span>Moves count: {movesCount}</span>
        <span>Score: {gameScore}</span>
      </div>
    );
  } else if (
    gameState === config.gameStates[1] ||
    gameState === config.gameStates[2]
  ) {
    return (
      <div className="menuGrid">
        <button onClick={gameStart} disabled>
          Start
        </button>
        <button onClick={gamePause}>Pause</button>
        <select onChange={selectDifficulty} disabled>
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        <span>Moves count: {movesCount}</span>
        <span>Score: {gameScore}</span>
      </div>
    );
  } else if (
    gameState === config.gameStates[3] ||
    gameState === config.gameStates[4]
  ) {
    return (
      <div className="menuGrid">
        <button onClick={gameStart}>Start</button>
        <button onClick={gamePause} disabled>
          Pause
        </button>
        <select onChange={selectDifficulty}>
          {config.difficultyLevels.map((level) => (
            <option value={level}>{level}</option>
          ))}
        </select>
        <span>Moves count: {movesCount}</span>
        <span>Score: {gameScore}</span>
      </div>
    );
  }

  return (
    <div className="menuGrid">
      <button onClick={gameStart}>Start</button>
      <button onClick={gamePause}>Pause</button>
      <select onChange={selectDifficulty}>
        <option value="easy">easy</option>
        <option value="normal">normal</option>
        <option value="hard">hard</option>
      </select>
      <span>Moves count: {movesCount}</span>
      <span>Score: {gameScore}</span>
    </div>
  );
};

export default SnakeMenu;
