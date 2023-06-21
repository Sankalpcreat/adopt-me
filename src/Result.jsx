import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (//if no one is present in array
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet                     // all the data coming from Pet.jsx
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;