import Card from './component/Card';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./css/main.css"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Card />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
