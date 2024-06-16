import config from "./config.json";

export default function ({
  queenCount,
  toggleShowColors,
  gameState,
  gameStart,
  gameReset,
}) {
  let menuInside = null;

  if (gameState === config.gameStates[0]) {
    menuInside = (
      <div className="menu">
        <p className="userMessage">
          Message: <span>{config.gameMessages[0]}</span>
        </p>
        <button className="menuButton" onClick={gameStart}>
          Start
        </button>
        <button className="menuButton" disabled onClick={gameReset}>
          Reset
        </button>
        <button className="menuButton" disabled onClick={toggleShowColors}>
          Toggle Show Spaces
        </button>
        <div style={{ float: "right", dispaly: "inline" }}>
          Score: {queenCount} / 8
        </div>
      </div>
    );
  } else if (gameState === config.gameStates[1]) {
    menuInside = (
      <div className="menu">
        <p className="userMessage">
          Message: <span>{config.gameMessages[1]}</span>
        </p>
        <button className="menuButton" disabled onClick={gameStart}>
          Start
        </button>
        <button className="menuButton" onClick={gameReset}>
          Reset
        </button>
        <button className="menuButton" onClick={toggleShowColors}>
          Toggle Show Spaces
        </button>
        <div style={{ float: "right", dispaly: "inline" }}>
          Score: {queenCount} / 8
        </div>
      </div>
    );
  } else if (gameState === config.gameStates[2]) {
    menuInside = (
      <div className="menu">
        <p className="userMessage">
          Message: <span>{config.gameMessages[2]}</span>
        </p>
        <button className="menuButton" onClick={gameStart}>
          Start
        </button>
        <button className="menuButton" disabled onClick={gameReset}>
          Reset
        </button>
        <button className="menuButton" onClick={toggleShowColors}>
          Toggle Show Spaces
        </button>
        <div style={{ float: "right", dispaly: "inline" }}>
          Score: {queenCount} / 8
        </div>
      </div>
    );
  } else if (gameState === config.gameStates[3]) {
    menuInside = (
      <div className="menu">
        <p className="userMessage">
          Message: <span>{config.gameMessages[3]}</span>
        </p>
        <button className="menuButton" disabled onClick={gameStart}>
          Start
        </button>
        <button className="menuButton" onClick={gameReset}>
          Reset
        </button>
        <button className="menuButton" onClick={toggleShowColors}>
          Toggle Show Spaces
        </button>
        <div style={{ float: "right", dispaly: "inline" }}>
          Score: {queenCount} / 8
        </div>
      </div>
    );
  } else if (gameState === config.gameStates[4]) {
    menuInside = (
      <div className="menu">
        <p className="userMessage">
          Message: <span>{config.gameMessages[4]}</span>
        </p>
        <button className="menuButton" disabled onClick={gameStart}>
          Start
        </button>
        <button className="menuButton" onClick={gameReset}>
          Reset
        </button>
        <button className="menuButton" onClick={toggleShowColors}>
          Toggle Show Spaces
        </button>
        <div style={{ float: "right", dispaly: "inline" }}>
          Score: {queenCount} / 8
        </div>
      </div>
    );
  }

  return <div className="queensOnChessMenu">{menuInside}</div>;
}
