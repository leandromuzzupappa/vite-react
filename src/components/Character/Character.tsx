interface ICharacter {
  image: string;
  name: string;
  location: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
}

export const Character = ({
  image,
  name,
  location,
  species,
  status,
}: ICharacter): JSX.Element => {
  return (
    <article className="character">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="character-overlay">
        <h4>Location: {location.name}</h4>
        <h4>Specie: {species}</h4>
        <h4>Status: {status}</h4>
      </div>
    </article>
  );
};
