import { useState } from "react";
import cloudy from "../../../assets/cloudy.png";
import { DailyWeather } from "./DailyWeather";
import { LocationData } from "./LocationData";

export const Home = () => {

  const [image, setImage] = useState(cloudy)

  return (
    <div className="w-[80%] h-[90%] px-4">
      <LocationData image={image}/>
      <DailyWeather image={image}/>
    </div>
  );
};
