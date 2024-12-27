import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
