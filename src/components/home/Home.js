import React, { useState } from 'react';
import './home.css';

const api = {
key: "34138816574919c252973fffe44675aa",
base: "https://api.openweathermap.org/data/2.5/"
}

export default function Home () {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = evento => {
        if(evento.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
            setQuery('');
            console.log(result);
           })
        }
    }

    const dateBuilder = (e) => {
        let months = ["February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"]

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
         "Thursday", "Friday", "Saturday"];

         let day = days[e.getDay()];
         let date = e.getDate();
         let month = months[e.getMonth()];
         let year = e.getFullYear();

         return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 
        'home-warm' : 'home')  : 'home'}>
         <main>
             <div className="search-box">
                 <input
                 type="text"
                 placeholder="Search..."
                 className="search-bar"
                 onChange={e => setQuery(e.target.value)}
                 value={query}
                 onKeyPress={search}
                 >
                 </input>
             </div>
             {(typeof weather.main != "undefined") ? (
                 <div>
             <div className="location-box">
                 <div className="location">{weather.name}, {weather.sys.country}</div>
                 <div className="date">{dateBuilder(new Date())}</div> 
             </div>
             <div className="weather-box">
                 <div className="temp">
                     {Math.round(weather.main.temp)}°c
                 </div>
                 <div className="weather">{weather.weather[0].main}</div>
             </div>
             </div>
          ) : ('')}
         </main>
        </div>
    )
}
