import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import configureStore  from "./redux/configureStore";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider as ReduxProvider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore();

root.render(
    <ReduxProvider store={store}>
        <Router>
            <App tab="home" />
        </Router>
    </ReduxProvider>
);