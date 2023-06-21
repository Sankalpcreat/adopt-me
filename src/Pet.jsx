import {Link} from 'react-router-dom';


const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props; //props to store the value
  
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";//img link
    if (images.length) {//lenght of image check
      hero = images[0];//copy image to  the hero link from the props 
    }
  
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </Link>
    );
  };
  
  export default Pet;
  