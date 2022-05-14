import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeechProvider appId="e2883003-261e-4a3f-92a9-3e261619e889" language="en-US">
    <App />
  </SpeechProvider>
);
