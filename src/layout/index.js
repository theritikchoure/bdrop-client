import '../assets/styles/join.css';
import BannerImage from '../assets/images/banner.jpg';
import { connect } from 'react-redux';
import Header from '../components/header';
import Dashboard from "../pages/dashboard/index";
import Setting from "../pages/setting/index";
import Profile from "../pages/account/index";
import LoginActivity from "../pages/others/login-activity";
import { Routes, Route } from "react-router-dom"
const Index = ({ match }) => {

    console.log(match)

    return (
        // < !--component -- >
        // <div className="bg-white">
        //     <div className="flex justify-center h-screen">

        //         {/* Left area */}
        //         <div className="flex items-center w-full max-w-md px-2 mx-auto lg:w-2/5">
        //             {/* <div className="flex-1"> */}
        //                 <Header />
        //                 <Routes>
        //                     <Route exact path="/explore" element={<Dashboard />} />
        //                 </Routes>

        //                 {/* <Route path={`${match.url}/channel`} component={Channel} /> */}
        //             {/* </div> */}
        //         </div>

        //         {/* Right area */}
        //         {/* <div className="hidden bg-cover lg:block lg:w-2/3">
        //             <img src={BannerImage} alt="logo" className='block w-full h-full' />
        //         </div> */}
        //         <div className="hidden bg-cover lg:block lg:w-2/3 relative md:fixed min-h-screen top-0 bottom-0 left-33" style={{ backgroundColor: 'var(--main-bg-color)' }}>
        //             <div className="flex items-center h-full px-20 flex-1 flex-col justify-center">
        //                 <div className="bg-white h-28 w-28 rounded-full px-4 py-2 mt-12 flex items-center justify-center space-x-2 lg:space-x-4">
        //                     {/* <img src={MobileSecurityIcon} alt="logo" /> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="relative">
            <div className="w-full lg:w-2/6 px-5 bg-gray-50">
                <Header />
                <Routes>
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Index);