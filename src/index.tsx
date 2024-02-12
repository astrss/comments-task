import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import useMockAdapter from "src/api/useMockAdapter";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient();

const RootApp = () => {
    useMockAdapter();

    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
};

root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>,
);
