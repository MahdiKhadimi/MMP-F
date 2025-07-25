import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { LoanFormProvider } from "./context/LoanFormContext";
import { ThemeProvider } from "./context/ThemeContext";

// Hide server validation error from console

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <LoanFormProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </LoanFormProvider>
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer position="top-right" autoClose={2000} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
