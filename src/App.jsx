import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Store from "./Store";

const App = () => {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
