import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./components/Home/components/Appbar";
import { Home } from "./components/Home/Home.component";
import LoginComponent from "./components/next/loginComponent";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/aboutus" element={<div>aboutus</div>} exact />
        <Route path="/doctorlineup" element={<div>doctorlineup</div>} exact />
        <Route
          path="/appointmentschedule"
          element={<div>appointmentschedule</div>}
          exact
        />
        <Route
          path="/emergencyphonenumber"
          element={<div>emergencyphonenumber</div>}
          exact
        />
        <Route path="/appointment" element={<div>appointment</div>} exact />
        <Route path="/signup" element={<LoginComponent />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
