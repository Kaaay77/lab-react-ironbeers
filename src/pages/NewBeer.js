import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/nav.png";
import { Link } from "react-router-dom";



export default function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagLine] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewer_tips, setBrewerTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewer_tips: brewer_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
          };
      
          axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
              setName("");
              setTagLine("");
              setDescription("");
              setFirstBrewed("");
              setBrewerTips("");
              setAttenuationLevel(0);
              setContributedBy("");
              navigate("/");
            });
        }

    return <>
       <div className="content">
       <nav>
        <Link to="/">
          <img src={Nav} alt="Nav" className="Nav"></img>
        </Link>
      </nav>

      <div>
        <form onSubmit={handleSubmit} className="formClass">
          <div className="inputClass">
            <label>Name </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="inputClass">
            <label>Tagline </label>
            <input
              type="text"
              name="tagline"
              onChange={(e) => setTagLine(e.target.value)}
              value={tagline}
            />
          </div>
          <div className="inputClass">
            <label>Description </label>
            <textarea
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="inputClass">
            <label>First brewed </label>
            <input
              type="text"
              name="first_brewed"
              onChange={(e) => setFirstBrewed(e.target.value)}
              value={first_brewed}
            />
          </div>
          <div className="inputClass">
            <label>Brewers tips </label>
            <input
              type="text"
              name="brewers_tips"
              onChange={(e) => setBrewerTips(e.target.value)}
              value={brewer_tips}
            />
          </div>
          <div className="inputClass">
            <label>Attenuation level </label>
            <input
              type="number"
              name="attenuation_level"
              onChange={(e) => setAttenuationLevel(e.target.value)}
              value={attenuation_level}
            />
          </div>
          <div className="inputClass">
            <label >Contributed by </label>
            <input
              type="text"
              name="contributed_by"
              onChange={(e) => setContributedBy(e.target.value)}
              value={contributed_by}
            />
          </div>
          <button type="submit" className="buttonForm" >
            ADD
          </button>
        </form>
      </div>
    </div>
    </>
}