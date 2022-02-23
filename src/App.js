import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import Header from "./components/header/Header"

// https://www.npmjs.com/package/react-toastify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import StateL from './components/LearningMore/StateLearning';
import UseEffectLearning from './components/LearningMore/UseEffectLearning';
import FetchLearning from './components/LearningMore/FetchLearning';
import PromiseLearning from './components/LearningMore/PromiseLearning';
import PromiseLearningMore from './components/LearningMore/PromiseLearningMore';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddEdit}/>
          <Route path="/update/:id" component={AddEdit}/>
          <Route path="/view/:id" component={View}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
      {/* <StateL></StateL> */}
      {/* <FetchLearning/> */}
      {/* <PromiseLearning/> */}
      {/* <PromiseLearningMore/> */}
      {/* <UseEffectLearning /> */}
    </BrowserRouter>
  );  
}

export default App;
