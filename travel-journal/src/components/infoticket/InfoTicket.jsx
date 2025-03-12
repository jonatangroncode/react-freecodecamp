import "./InfoTicket.css";

const InfoTicket = (props) => {
  console.log(props);
  return (
    <article className="journal-entry">
      <img className="main-img" src={props.img.src} alt={props.img.alt} />
      <div>
        <img src="../../src/assets/pin.svg" alt="pin" />
        <span> {props.country} </span>
        <a href={props.googleMapsLink}> View on Google Maps</a>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default InfoTicket;
