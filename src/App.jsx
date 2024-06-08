import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Blog, Store } from "./pages/";
import { Header } from "./layouts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
