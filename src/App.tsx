import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProductPage from "./pages/ProductPage";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";

function RouteApp() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/product" element={<ProductPage/>} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <Router>
        <RouteApp/>
      </Router>
    </>
  );
}

export default App;
