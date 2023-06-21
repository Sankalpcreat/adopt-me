import {useParams} from "react-router-dom";

const Details = () => {
    const {id}=useParams;//useparams for  couting which link is clicked
    return <h2>{id}</h2>;
  };
  
  export default Details;