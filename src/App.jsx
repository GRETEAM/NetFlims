import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Bookmark from "./pages/Bookmark";
import Dashboard from './pages/Dashboard';
import Movies from "./pages/Movies";
import Person from "./pages/Person";
import Series from "./pages/Series";
import store from "./Store";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/movies' element={<Movies />} /> 
          <Route path='/series' element={<Series />} /> 
          <Route path='/bookmark' element={<Bookmark />} /> 
          <Route path='/person' element={<Person />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
