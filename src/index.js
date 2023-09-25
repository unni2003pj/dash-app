import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/main.scss";

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <DndProvider key={1} backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>
);
