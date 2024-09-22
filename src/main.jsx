import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import PageNavigation from "./pages/PageNavigation";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <AuthContextProvider>
        <ToastContainer />
        <RouterProvider router={PageNavigation} />
      </AuthContextProvider>
    </AppContextProvider>
  </StrictMode>
);
