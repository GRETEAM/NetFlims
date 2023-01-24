import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Pages';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
