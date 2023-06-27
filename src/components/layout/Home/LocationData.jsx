import { PropTypes } from "prop-types";

export const LocationData = ({ data }) => {
  return (
    <article className="flex px-2 items-center justify-between">
      <div className="mb-4">
        <div>
          <h1 className="text-6xl font-semibold text-white mb-2">
            {data.location.name || ""}
          </h1>
          <h2 className="text-3xl font-semibold text-white text-left">
            {data.location.localtime || ""}
          </h2>

          <div className="w-[100%] mt-4">
            <img className="object-cover w-[26%]" src={data.current.condition.icon} alt="cloud" />
            <h3 className="text-3xl text-left text-white font-semibold">
              {data.current.condition.text}
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-[140px] text-white font-light">
          <h3>
            {data.current.temp_c || ""}
            <span className="text-7xl">°C</span>{" "}
          </h3>
        </div>
        <div className="text-5xl text-white font-light">
          <h3>
            {data.current.temp_f || ""}° /{" "}
            <span className="text-blue-400">{data.current.wind_kph || ""}</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

LocationData.propTypes = {
  image: PropTypes.string,
  data: PropTypes.object,
};
