import config from "./config.json";

const SnakeMenu = ({
  gameStart,
  gameReset,
  movesCount,
  gamePause,
  gameScore,
  selectDifficulty,
  gameState,
}) => {
  if (gameState === config.gameStates[0]) {
    return (
      <div className="menuGrid">
        <button className="snakeMenuControl" onClick={gameStart}>
          Start
        </button>
        <button className="snakeMenuControl" onClick={gamePause} disabled>
          Pause
        </button>
        <button className="snakeMenuControl" onClick={gameReset}>
          Reset
        </button>
        <select className="snakeMenuControl" onChange={selectDifficulty}>
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        <span className="snakeMenuControl">Moves count: {movesCount}</span>
        <span className="snakeMenuControl">Score: {gameScore}</span>
      </div>
    );
  } else if (
    gameState === config.gameStates[1] ||
    gameState === config.gameStates[2]
  ) {
    return (
      <div className="menuGrid">
        <button className="snakeMenuControl" onClick={gameStart} disabled>
          Start
        </button>
        <button className="snakeMenuControl" onClick={gamePause}>
          Pause
        </button>
        <button className="snakeMenuControl" onClick={gameReset}>
          Reset
        </button>
        <select
          className="snakeMenuControl"
          onChange={selectDifficulty}
          disabled
        >
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        <span className="snakeMenuControl">Moves count: {movesCount}</span>
        <span className="snakeMenuControl">Score: {gameScore}</span>
      </div>
    );
  } else if (
    gameState === config.gameStates[3] ||
    gameState === config.gameStates[4]
  ) {
    return (
      <div className="menuGrid">
        <button className="snakeMenuControl" onClick={gameStart}>
          Start
        </button>
        <button className="snakeMenuControl" onClick={gamePause} disabled>
          Pause
        </button>
        <button className="snakeMenuControl" onClick={gameReset}>
          Reset
        </button>
        <select className="snakeMenuControl" onChange={selectDifficulty}>
          {config.difficultyLevels.map((level) => (
            <option value={level}>{level}</option>
          ))}
        </select>
        <span className="snakeMenuControl">Moves count: {movesCount}</span>
        <span className="snakeMenuControl">Score: {gameScore}</span>
      </div>
    );
  } else if (gameState === config.gameStates[5]) {
    return (
      <div className="menuGrid">
        <button className="snakeMenuControl" onClick={gameStart}>
          Start
        </button>
        <button className="snakeMenuControl" onClick={gamePause} disabled>
          Pause
        </button>
        <button className="snakeMenuControl" onClick={gameReset}>
          Reset
        </button>
        <select className="snakeMenuControl" onChange={selectDifficulty}>
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        <span className="snakeMenuControl">Moves count: {movesCount}</span>
        <span className="snakeMenuControl">Score: {gameScore}</span>
      </div>
    );
  }
  return (
    <div className="menuGrid">
      <button className="snakeMenuControl" onClick={gameStart}>
        Start
      </button>
      <button className="snakeMenuControl" onClick={gamePause}>
        Pause
      </button>
      <button className="snakeMenuControl" onClick={gameReset}>
        Reset
      </button>
      <select className="snakeMenuControl" onChange={selectDifficulty}>
        <option value="easy">easy</option>
        <option value="normal">normal</option>
        <option value="hard">hard</option>
      </select>
      <span className="snakeMenuControl">Moves count: {movesCount}</span>
      <span className="snakeMenuControl">Score: {gameScore}</span>
    </div>
  );
};

export default SnakeMenu;
