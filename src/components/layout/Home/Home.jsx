import { useState } from "react";
import cloudy from "../../../assets/cloudy.png";
import { DailyWeather } from "./DailyWeather";
import { LocationData } from "./LocationData";
import { useFetch } from "../../../hooks/useFetch.js";
import { API_KEY } from "../../../static/paths.js";
import { Loader } from "../../common/Loader";

export const Home = () => {
  const [image] = useState(cloudy);
  const { data, loading } = useFetch(API_KEY);

  return (
    <div className="w-[80%] h-[90%] px-4">
      {loading && <Loader/>}
      {data && (
        <>
          <LocationData image={image} data={data} />
          <DailyWeather image={image} data={data}/>
        </>
      )}
    </div>
  );
};
