import "./app-card.css";

const TariffCard = ({ header, price, speed, note, color, isSelected }) => {
  let selectedCard = "";
  if (isSelected) selectedCard = "selected";
  return (
    <>
      <div className={`card ${selectedCard}`}>
        <div className="card-header" style={{ backgroundColor: color }}>
          <div className="card-header">{header}</div>
        </div>
        <div className="card-body" style={{ backgroundColor: color }}>
          <div className="card-price">
            <span className="sup">руб </span>
            <span className="size">{price}</span>
            <span className="sub"> /мес</span>
          </div>
        </div>
        <div className="card-speed">{speed}</div>
        <div className="card-footer">
          <div className="card-note">{note}</div>
        </div>
      </div>
    </>
  );
};

export default TariffCard;
