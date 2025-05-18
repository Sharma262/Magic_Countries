import { Route, Routes, BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Header from "./components/header";
import CountryDetail from "./pages/countryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
