import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import Nav from "../assets/nav.png";

export default function SingleBeer() {
  const { id } = useParams();
  const [fetching, setFetching] = useState(false);
  const [birra, setBirra] = useState([]);

  console.log(id);

  useEffect(() => {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBirra(response.data);
        setFetching(true);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return fetching ? (
    <div className="content-2">
      <nav>
        <Link to="/">
          <img src={Nav} alt="Nav" className="Nav"></img>
        </Link>
      </nav>
      {/* // Beer details */}
      <div className="beerCard" key={birra.id}>
        <div className="beerCardImg-2">
          <img src={birra.image_url} alt="birraIMG" className="birraIMG"></img>
          <div className="details">
            <h3>{birra.name}</h3>
            <h4>{birra.tagline}</h4>
            <p>{birra.first_brewed}</p>
            <p>{birra.attenuation_level}</p>
            <p>{birra.description}</p>
            <p>{birra.contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Cargando</div>
  );
}
