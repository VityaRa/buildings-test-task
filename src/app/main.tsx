import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "@/pages/root/ui/Main.page";
import '@/shared/styles/globals.scss';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
