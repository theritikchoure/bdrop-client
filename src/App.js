import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import Join from "./pages/join-d/index";
import TAndC from "./pages/T&C/index";
import CookiesPolicy from "./pages/others/cookies";
import Test from "./pages/test";
import { connect } from 'react-redux';
import CookiesConsent from './components/cookiesPopup';
import Layout from "./layout";

function App(props) {
  console.log(props)
  let auth = props?.auth;
  console.log(auth);
  return (
    <div className="App">
      <ToastContainer position="bottom-center" />
      <Routes>

        <Route exact path="/" element={<Home />} />

        {auth?.user?.user && <>
          <Route exact path="/*" element={<Layout />} />
          <Route path="/join" element={<Navigate to="/explore" replace />} />
        </>}

        {!auth?.user?.user && <>
          <Route path="*" element={<Navigate to="/join" replace />} />
          <Route path="/join" element={<Join />} />
        </>}

        <Route path="/terms-and-conditions" element={<TAndC />} />

        {/* Others */}

        <Route exact path="/cookie-policy" element={<CookiesPolicy />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
      <CookiesConsent />
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);