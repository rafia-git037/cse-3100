import { Outlet, Route, Routes } from "react-router-dom";
import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import AvailableCats from "./views/AvailableCats";
import ContactUs from "./views/ContactUs";
import AboutUs from "./views/AboutUs";

function App() {
  return (
    <Routes>
      {/* BaseLayout wraps all routes */}
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        {/* Define individual routes */}
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;