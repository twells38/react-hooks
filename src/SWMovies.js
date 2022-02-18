import React, { useState, useEffect } from 'react'
import './SWMovies.css'
import axios from "axios";
function SWMovies () {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');
    useEffect(() => {
        //fetching data from api
        async function getData() {
            //you can await here
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            console.log(response.data);
            setMovie(response.data);
            
        }
        getData();
        },[number]) // when number is changed, setMovie in useEffect will run
        return (
            <div className="Movie">
                <h1>Pick a movie </h1> 
                <select value={number} onChange={(e)=>{setNumber(e.target.value)}} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                   
                </select>
                <div className="Movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.opening_crawl}</p>
                <p className="Movie-director">Director: {movie.director}</p>
                </div>
               
            </div>
        )
}
export default SWMovies;

