import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/random/App';
import Axios from './components/axios/Axios';
import Task from "./components/task/Task"
import { ContextProvider } from './contextapi/tasks-context';
import Base from './Base';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}></Route>
        <Route path="/random" element={<App />} />
        <Route path="/unsplash" element={<Axios />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider >
);

