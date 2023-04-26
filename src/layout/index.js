import '../assets/styles/join.css';
import BannerImage from '../assets/images/banner.jpg';
import { connect } from 'react-redux';
import PatientHome from "../pages/home/patient";
import DonorHome from "../pages/home/donor";
import Header from '../components/header';
import Dashboard from "../pages/dashboard/index";
import Setting from "../pages/setting/index";
import Profile from "../pages/profile/index";
import LoginActivity from "../pages/others/login-activity";
import { Routes, Route } from "react-router-dom";

const Index = (props) => {
    let auth = props?.auth;
    return (
        <div className="relative">
            <div className="w-full lg:w-2/6 px-5 bg-gray-50">
                <Header />
                <Routes>
                    <Route exact path="/" element={auth?.user?.user?.user_type === 'patient' ? <PatientHome /> : <DonorHome />} />
                    <Route exact path="/explore" element={<Dashboard />} />
                    <Route exact path="/setting" element={<Setting />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/login-activity" element={<LoginActivity />} />
                </Routes>
            </div>
            <div className="hidden lg:block lg:w-4/6 relative md:fixed w-full md:w-7/12 min-h-screen top-0 bottom-0 left-33"
                style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex justify-center items-center h-screen  flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
                    <span className="bg-white bg-opacity-10 px-4 py-2 rounded-xl text-xl lg:text-2xl xl:text-3xl font-bold">BDROP</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(Index);