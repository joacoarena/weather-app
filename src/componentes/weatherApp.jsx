 import React, { useState } from 'react'
 import WeatherForm from './weatherForm'
 
 export default function weatherApp()  {
  const [weather, setWeather] = useState(null)

  async function loadInfo(city = 'london') {
    
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}&KEY=${process.env.REACT_APP_KEY}${city}`)

      const json = request.json();
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)
  }
   return (
     <div>
      <WeatherForm  onChangeCity={handleChangeCity}/>
      <div>info</div>
     </div>
   )
 }
 