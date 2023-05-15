import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import ToggleDarkMode from "./utils/ToggleDarkMode";
import store from "./app/store";

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ToggleDarkMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ToggleDarkMode>
  </Provider>,
  document.getElementById("root")
);
