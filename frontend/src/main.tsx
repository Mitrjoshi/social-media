import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import { Route } from "./screens/Route.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster
        duration={2000}
        position="bottom-left"
        icons={{
          close: null,
          error: null,
          success: null,
          loading: null,
          info: null,
          warning: null,
        }}
        toastOptions={{
          style: {
            background: "var(--primary)",
            color: "var(--background)",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "10px",
            padding: "10px 16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            maxWidth: "fit-content", // 👈 prevent full width
            width: "auto",
            textAlign: "center",
          },
          className: "minimal-toast",
        }}
      />

      <Route />
    </ThemeProvider>
  </StrictMode>
);
