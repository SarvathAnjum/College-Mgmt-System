import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./Utility/theme.js";
import { createGenerateClassName, StylesProvider } from "@mui/styles";

const generateClassName = createGenerateClassName({
  seed: "cms",
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={customTheme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </StrictMode>
);
