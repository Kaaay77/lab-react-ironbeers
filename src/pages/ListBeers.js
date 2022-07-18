import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

import Nav from "../assets/nav.png"


export default function ListBeers() {
const [beer, setBeer] = useState([])

 useEffect(() =>{
     Axios
     .get("https://ih-beers-api2.herokuapp.com/beers")
     .then((response) => {
         setBeer(response.data)
     })

 }, [])
    return(
        <div className="content">
            <nav>
                <Link to="/" >
                <img src={Nav} alt="Nav" className="Nav"></img>
                </Link>
            </nav>
            {beer.map((birra) => {
                return(
                    <div className="beerCard">

                    <Link to={`/beers/${birra._id}`} className="beerCard" style={{ textDecoration: "none" }}>
                    <div className="beerCardImg">
                            <img src={birra.image_url} alt="birraIMG"></img>
                       <div className="details">
                            <h3>{birra.name}</h3> 
                            <h4>{birra.tagline}</h4>
                            <p>{birra.contributed_by}</p>
                       </div>
                    </div>
                    </Link>
                    </div>
                )
            })}

        </div>
    )
}