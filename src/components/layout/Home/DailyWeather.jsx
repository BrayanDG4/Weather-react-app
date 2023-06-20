import PropTypes from 'prop-types'

export const DailyWeather = ({image}) => {
  return (
    <article>
      <nav className="border-solid border-b-2 border-b-slate-500">
        <ul className="flex gap-6 px-3 py-2 text-2xl text-white font-light">
          <li>
            <a href="">Daily</a>
          </li>
          <li>
            <a href="">Daily</a>
          </li>
        </ul>
      </nav>

      <div className="w-full mt-4">
        <ul className="flex gap-6 px-3 text-center text-xl text-white font-light">
          <li className="w-[14.2%]">
            Monday
            <div className="flex justify-center my-4">
              <div className="w-[60%]">
                <img className="object-cover" src={image} alt="cloud" />
              </div>
            </div>
            <h3 className="text-3xl font-semibold">11°</h3>
          </li>
          <li className="w-[14.2%]">Tuesday</li>
          <li className="w-[14.2%]">Wednesday</li>
          <li className="w-[14.2%]">Thursday</li>
          <li className="w-[14.2%]">Friday</li>
          <li className="w-[14.2%]">Saturday</li>
        </ul>
      </div>
    </article>
  );
};

DailyWeather.propTypes = {
    image: PropTypes.string,
}
