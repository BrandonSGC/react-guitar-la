import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Blog, Store, Guitar } from "./pages/";
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
        <Route path="/store/guitar/:id" element={<Guitar />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
