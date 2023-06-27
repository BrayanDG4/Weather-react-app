import PropTypes from "prop-types";

export const DailyWeather = ({ data }) => {
  return (
    <article>
      <nav className="border-solid border-b-2 border-b-slate-500">
        <ul className="flex gap-6 px-3 py-2 text-2xl text-white font-light">
          <li className="hover:shadow-slate-50">
            <a href="">Daily</a>
          </li>
        </ul>
      </nav>

      <div className="w-full mt-4">
        <ul className="flex gap-6 px-3 text-center text-xl text-white font-light">
          <li className="w-[14.2%]">
            <h3 className="font-semibold">
              {data.forecast.forecastday[1].date}
            </h3>
            <div className="flex justify-center my-4">
              <div className="w-[60%]">
                <img
                  className="object-cover"
                  src={data.forecast.forecastday[1].day.condition.icon}
                  alt="cloud"
                />
              </div>
            </div>
            <h3 className="text-3xl font-semibold">{data.forecast.forecastday[1].day.maxtemp_c}°</h3>
          </li>

          <li className="w-[14.2%]">
            <h3 className="font-semibold">
              {data.forecast.forecastday[2].date}
            </h3>
            <div className="flex justify-center my-4">
              <div className="w-[60%]">
                <img
                  className="object-cover"
                  src={data.forecast.forecastday[2].day.condition.icon}
                  alt="cloud"
                />
              </div>
            </div>
            <h3 className="text-3xl font-semibold">{data.forecast.forecastday[2].day.maxtemp_c}°</h3>
          </li>

        </ul>
      </div>
    </article>
  );
};

DailyWeather.propTypes = {
  data: PropTypes.object,
};
