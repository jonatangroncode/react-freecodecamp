import "./Card.css";

const Card = (props) => {
  return (
    <section className="card-container">
      <article className="card">
        <img className="catimage" src={props.img} alt="catimg" />
        <div className="card-content">
          <h2>{props.name}</h2>
          <p>📞 {props.phone}</p>
          <p>✉️ {props.email}</p>
        </div>
      </article>
    </section>
  );
};

export default Card;
