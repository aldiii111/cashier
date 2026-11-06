import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProductPage from "./pages/ProductPage";
import AppLayout from "./components/layout/AppLayout";
import HistoryPage from "./pages/HistoryPage";

function RouteApp() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
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
