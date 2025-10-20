import { useWeather } from './hooks/useWeather'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getWeatherFromCode } from './utils';
import { type CurrentWeather } from './types';

export const WeatherCard = () => {
  const [city, setCity] = useState({ "name": "Cadiz", "lat": 0, "lon": 0 });
  const [currentData, setCurrentData] = useState<CurrentWeather | null>(null);
  const { location, currentWeather } = useWeather();
  
  useEffect(() => {
  location({ city: city.name }).then((data) => {
    setCity({ name: city.name, lat: data?.lat ?? 0, lon: data?.lon ?? 0 });
    currentWeather({ lat: city.lat, lon: city.lon }).then((data) => {
      setCurrentData(data);
    });
    });
  }, []);

  console.log(city);

  if (!city.lat || !city.lon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <section className="flex flex-col gap-2 w-48 border-1 border-[#eee] bg-white p-4 rounded-md">
        {currentData &&
          (<div className="flex flex-col gap-2 items-center">
            {getWeatherFromCode(currentData?.icon as number).label}:
          <motion.div
            animate={{ translateX: [22,0,-22,0,22], translateY: [0,-7,0,7,0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            {getWeatherFromCode(currentData?.icon as number).icon}
          </motion.div>
          </div>
          )}
        <div className="flex flex-col gap-2">{city.name}</div>
        <div className="flex flex-col gap-2">temp: {currentData?.temp} °C</div>
        <div className="flex flex-col gap-2">speed: {currentData?.wind.speed} km/h {currentData?.wind.direction.direction}</div>
      </section>
    </div>
  )
}