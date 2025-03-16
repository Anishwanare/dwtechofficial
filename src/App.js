import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import Page from "./Pages/Page";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div>
      <Toaster position="top-right"/>
      <Homepage />
    </div>
  );
}

export default App;
