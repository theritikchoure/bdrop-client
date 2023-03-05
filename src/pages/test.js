import '../assets/styles/join.css';
import BannerImage from '../assets/images/banner.jpg';
import { connect } from 'react-redux';
import { generateOTP, verifyOTP } from '../services/auth.service';
import Header from '../components/header';
import Dashboard from "../pages/dashboard/index";
const Index = (props) => {

    return (
        <div className="relative">
            <div className="w-full lg:w-2/6">
                <Header />
                {/* <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
                    <h2 className="text-4xl mb-5">Meet Benny</h2>
                    <p className="mb-5">I was born 20 May 2020</p>
                </div>
                <div className="bg-red-50 h-screen flex justify-center items-center flex-col p-10">
                    <h2 className="text-4xl mb-5">I love food</h2>
                    <p className="mb-5">Bones, Pallets, and more!</p>
                </div>
                <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
                    <h2 className="text-4xl mb-5">I love my humans</h2>
                    <p className="mb-5">My humans are super special to me, and I love them</p>
                </div> */}
                <Dashboard />
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

export default connect(mapStateToProps, { generateOTP, verifyOTP })(Index);