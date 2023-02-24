import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import Join from "./pages/join-d/index";
import Dashboard from "./pages/dashboard/index";
import Account from "./pages/account/index";
import TAndC from "./pages/T&C/index";
import CookiesPolicy from "./pages/others/cookies";
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  let auth = props?.auth;
  return (
    <div className="App">
      <ToastContainer position="bottom-center"/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/join" element={ <Join/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/account" element={ <Account/> } />

        {/* Others */}
        <Route path="/terms-and-conditions" element={ <TAndC/> } />
        <Route path="/cookie-policy" element={ <CookiesPolicy/> } />
      </Routes>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);