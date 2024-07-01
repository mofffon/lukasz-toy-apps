const SnakeSteering = ({ directionClick }) => {
  return (
    <div className="steeringGrid">
      <div className="empty gridItem"></div>
      <button className="steeringButton gridItem" onClick={directionClick}>
        up
      </button>
      <div className="empty gridItem"></div>
      <button className="steeringButton gridItem" onClick={directionClick}>
        left
      </button>
      <div className="empty gridItem"></div>
      <button className="steeringButton gridItem" onClick={directionClick}>
        right
      </button>
      <div className="empty gridItem"></div>
      <button className="steeringButton gridItem" onClick={directionClick}>
        down
      </button>
      <div className="empty gridItem"></div>
    </div>
  );
};

export default SnakeSteering;
