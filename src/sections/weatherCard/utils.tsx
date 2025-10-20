import { type WeatherIcon } from "./types";
import { Sun, CloudSun, Cloud, Cloudy, CloudFog, CloudRain, CloudDrizzle, CloudSnow, Zap, Wind } from "lucide-react";

export const WeatherCodes: WeatherIcon = {
  0: {"type": "clear-sky", "label": "Clear Sky", "icon": <Sun className="w-12 h-12"/>},
  1: {"type": "mainly-clear", "label": "Mainly Clear", "icon": <CloudSun className="w-12 h-12"/>},
  2: {"type": "partly-cloudy", "label": "Partly Cloudy", "icon": <Cloud className="w-12 h-12"/>},
  3: {"type": "overcast", "label": "Overcast", "icon": <Cloudy className="w-12 h-12"/>},
  45: {"type": "foggy", "label": "Foggy", "icon": <CloudFog className="w-12 h-12"/>},
  51: {"type": "drizzle", "label": "Drizzle", "icon": <CloudDrizzle className="w-12 h-12"/>},
  61: {"type": "rainy", "label": "Rainy", "icon": <CloudRain className="w-12 h-12"/>},
  71: {"type": "snow-fall", "label": "Snow Fall", "icon": <CloudSnow className="w-12 h-12"/>},
  95: {"type": "thunderstorm", "label": "Thunderstorm", "icon": <Zap className="w-12 h-12"/>},
  100: {"type": "windy", "label": "Windy", "icon": <Wind className="w-12 h-12"/>},
}

export const getWeatherFromCode = (code: number) => {
  if (Object.keys(WeatherCodes).includes(code.toString())) {
    return WeatherCodes[code as keyof typeof WeatherCodes];
  } else {
    const rightCode = Object.keys(WeatherCodes).reduce((acc, key) => {
      if (parseInt(key) <= code) {
        acc = parseInt(key);
      }
      return acc;
    }, 0);
    return WeatherCodes[rightCode as keyof typeof WeatherCodes];
  }
}