import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import Join from "./pages/join-d/index";
import Dashboard from "./pages/dashboard/index";
import Account from "./pages/account/index";
import TAndC from "./pages/T&C/index";
import CookiesPolicy from "./pages/others/cookies";
import Test from "./pages/test";
import { connect } from 'react-redux';
import CookiesConsent from './components/cookiesPopup';
import Layout from "./layout";

function App(props) {
  console.log(props)
  let auth = props?.auth;
  
  return (
    <div className="App">
      <ToastContainer position="bottom-center"/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/*" element={ <Layout/> } />
        <Route path="/join" element={ <Join/> } />
        <Route path="/terms-and-conditions" element={ <TAndC/> } />
        {/* <Route path="/dashboard" element={ <Dashboard/> } /> */}
        {/* <Route path="/account" element={ <Account/> } /> */} 

        {/* Others */}
       
        <Route exact path="/cookie-policy" element={ <CookiesPolicy/> } />
        <Route exact path="/test" element={ <Test /> } />
      </Routes>
      <CookiesConsent />
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);