import logo from '../../assets/images/bdrop-logo.png';
import '../../assets/styles/home.css';
import { Link } from "react-router-dom";

const Home = () => {

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        alert(position.coords.latitude);
      });
    } else {
     alert("not supported")
    }
  }
  return (
    <div className="w-full h-screen" style={{ backgroundColor: 'var(--main-bg-color)' }}>
      <div className="w-full h-screen flex flex-col items-center justify-between py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold">BDROP</span>
          </div>

          <div className="bg-white h-28 w-28 rounded-full px-4 py-2 mt-12 flex items-center justify-center space-x-2 lg:space-x-4">
            <img src={logo} alt="logo" />
          </div>

          <h1 className="text-5xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
            Take Action, Make A Blood Donation
          </h1>
          <div className="flex flex-col items-center space-y-4 mt-24">
            {/* <Link to='/join' className="rounded-lg text-sm join-button">Join - BDROP</Link> */}
            <button className="rounded-lg text-sm join-button" onClick={getLocation}>Join - BDROP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;