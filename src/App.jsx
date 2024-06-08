import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Blog, Store } from "./pages/";
import { Footer, Header } from "./layouts";
import { ScrollToTop } from "./components";

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
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
