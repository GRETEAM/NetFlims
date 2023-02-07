import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Bookmark from "./pages/Bookmark";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import Person from "./pages/Person";
import Series from "./pages/Series";
import store from "./Store";
import { useState } from "react";
import Profile from "./pages/Profile";
import Auth from "./components/Auth";

const App = () => {
  const [sessionStatus, setSessionStatus] = useState();
  console.log(sessionStatus);

  return (
    <>
      {sessionStatus != "SIGNED_IN" ? (
        <>
          <Auth setSessionStatus={setSessionStatus} />
        </>
      ) : (
        <Provider store={store}>
          <BrowserRouter>
            <Navbar setSessionStatus={setSessionStatus} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/person" element={<Person />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/:detail" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      )}
    </>
  );
};

export default App;
