import "./InfoTicket.css";

const InfoTicket = (props) => {
  return (
    <article className="journal-entry">
      <img className="main-img" src={props.mainimg} alt="image" />
      <div>
        <img src="../../src/assets/pin.svg" alt="pin" />
        <span> {props.country} </span>
        <a href={props.googlelink}> View on Google Maps</a>
        <h2>{props.place}</h2>
        <p>{props.traveldate}</p>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default InfoTicket;
