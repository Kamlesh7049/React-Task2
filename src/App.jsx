import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CounterApp from "./CounterApp";

import ThemechngApp from "./Themechng App";
import About from "./about";
import Blog from "./blog";
import Display from "./Display";
import Insert from "./Insert";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="display" element={<Display />} />
            <Route path="insert" element={<Insert />} />
            <Route path="counterapp" element={<CounterApp />} />
            <Route path="themechng" element={<ThemechngApp />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
