import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import "./assets/scss/style.scss";
import { Provider } from 'react-redux';
import Store from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
