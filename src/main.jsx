import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import worker from "./worker/setUpWorker.js";
import DarkModeContextProvider from "./context/DarkModeContextProvider";
import CarContextProvider from "./context/CarContextProvider.jsx";
import { Provider } from "react-redux";
import stores from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const startWorker = async () => {
  await worker.start({ onUnhandledRequest: "bypass" });
  root.render(
    <React.StrictMode>
      <Provider store={stores}>
        <CarContextProvider>
          <DarkModeContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DarkModeContextProvider>
        </CarContextProvider>
      </Provider>
    </React.StrictMode>
  );
};

startWorker();
