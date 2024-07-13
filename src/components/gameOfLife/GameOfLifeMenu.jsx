import config from "./config.json";

const GameOfLifeMenu = ({
  gameState,
  initialDensity,
  onInitialDensityChange,
  gameStartReset,
  boardSize,
  gameSpeed,
  onSpeedChange,
  onSizeChange,
}) => {
  if (gameState === config.gameStates[0]) {
    return (
      <div className="gameOfLifeMenu">
        <button onClick={gameStartReset}>Start / Reset</button>
        <span>Time interval: {gameSpeed}</span>
        <input
          type="range"
          max={config.minSpeed}
          min={config.maxSpeed}
          className="GameOfLifeSlider"
          value={gameSpeed}
          onChange={onSpeedChange}
        />
        <span>Size: {boardSize}</span>
        <input
          type="range"
          min={config.minBoardSize}
          max={config.maxBoardSize}
          className="GameOfLifeSlider"
          onChange={onSizeChange}
          value={boardSize}
          step={config.boardSizeInterval}
        />
        <span>Initial density: {initialDensity} %</span>
        <input
          type="range"
          min={config.minInitialDensity}
          max={config.maxInitialDensity}
          className="GameOfLifeSlider"
          onChange={onInitialDensityChange}
          value={initialDensity}
        />
      </div>
    );
  } else {
    return (
      <div className="gameOfLifeMenu">
        <button onClick={gameStartReset}>Start / Reset</button>
        <span>Time interval: {gameSpeed}</span>
        <input
          disabled
          type="range"
          max={config.minSpeed}
          min={config.maxSpeed}
          className="GameOfLifeSlider"
          value={gameSpeed}
          onChange={onSpeedChange}
        />
        <span>Size: {boardSize}</span>
        <input
          disabled
          type="range"
          min={config.minBoardSize}
          max={config.maxBoardSize}
          className="GameOfLifeSlider"
          onChange={onSizeChange}
          value={boardSize}
          step={config.boardSizeInterval}
        />
        <span>Initial density: {initialDensity} %</span>
        <input
          disabled
          type="range"
          min={config.minInitialDensity}
          max={config.maxInitialDensity}
          className="GameOfLifeSlider"
          onChange={onInitialDensityChange}
          value={initialDensity}
        />
      </div>
    );
  }
};

export default GameOfLifeMenu;
