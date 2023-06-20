import { PropTypes } from "prop-types";

export const LocationData = ({ image }) => {
  return (
    <article className="flex px-2 items-center justify-between">
      <div className="mb-4">
        <div>
          <h1 className="text-6xl font-semibold text-white">San francisco</h1>
          <h2 className="text-3xl font-semibold text-white">
            September 25, 2023
          </h2>

          <div className="w-[50%]">
            <img className="object-cover" src={image} alt="cloud" />
            <h3 className="text-4xl text-center text-white font-semibold">
              Cloudy
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-[140px] text-white font-light">
          <h3>72°</h3>
        </div>
        <div className="text-5xl text-white font-light">
          <h3>
            81° / <span className="text-blue-400">57°</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

LocationData.propTypes = {
  image: PropTypes.string,
};
