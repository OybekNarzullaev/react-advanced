import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Suspense, useContext } from "react";
import "./styles/index.scss";
import MainPage from "./pages/MainPage/MainPage.async";
import AboutPage from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>toggle theme</button>
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
