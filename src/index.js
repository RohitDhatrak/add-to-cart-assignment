import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
