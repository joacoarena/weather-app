import React, { useState } from 'react'

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value
        if (value !== '') {
            setCity(value)   
        }
    }
function handleSubmit(e) {
    e.prevent.default();
    onChangeCity(city)
}

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
    </form>
    )
}

export default WeatherForm