import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import NavBar from './componants/NavBar';
import Cart from './componants/Cart';
import Home from './componants/Home';
function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </Router></>
  );
}

export default App;
