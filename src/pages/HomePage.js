import { Link } from 'react-router-dom';
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/random-beer.png"
export default function HomePage() {

    return (
         
         <div className=''>
                <Link to="/beers"  className='links' style={{ textDecoration: "none" }}>
                    <img src={beers} alt="beers"></img>
                    <h2 className='titulos'>Beers 🍺</h2>
                </Link>
                <p className='texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            <Link to="/random-beer" className='links' style={{ textDecoration: "none" }} >
                <img src={randomBeer} alt="random-beers" ></img>
                <h2 className='titulos'>Random Beer 🍺🍺</h2>
            </Link>
            <p className='texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            <Link to="/new-beer" className='links' style={{ textDecoration: "none" }}>
                <img src={newBeer} alt="" ></img>
                <h2 className='titulos'>New Beer 🍺🍺🍺</h2>

            </Link>
                <p className='texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>


         </div>
    )
}