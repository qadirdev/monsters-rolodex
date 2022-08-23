import "./card.style.css";

const Card = ({ monster}) => {
  return (
    <div className="card-container" key={monster.id}>
      <img
        src={`https://robohash.org/${monster.id}/?set=set2&size=210x210`}
        alt={`monster ${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
