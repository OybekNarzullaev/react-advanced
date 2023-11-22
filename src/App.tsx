import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Suspense } from "react";
import "./index.scss";
import MainPage from "./pages/MainPage/MainPage.async";
import AboutPage from "./pages/AboutPage/AboutPage.async";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
