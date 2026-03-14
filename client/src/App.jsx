import EVSelectScreen from "./components/EVselectionScreen";
import MainScreen from "./components/Mainscreen";
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<MainScreen />} />        \
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fleet" element={<EVSelectScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
