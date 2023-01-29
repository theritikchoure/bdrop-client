import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import Join from "./pages/join-d/index";
import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-center"/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/join" element={ <Join/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  )
}

export default App