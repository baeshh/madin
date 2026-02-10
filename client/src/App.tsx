import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  // Get base path from Vite's import.meta.env.BASE_URL
  const base = import.meta.env.BASE_URL;
  const [location] = useLocation();

  // Normalize base path: remove trailing slash, ensure it starts with /
  const basePath = base === "/" ? "" : base.replace(/\/$/, "");

  // Remove base path from current location for routing
  // wouter's useLocation returns the full pathname including base
  let pathWithoutBase = location;
  
  if (basePath) {
    // If we have a base path and location starts with it, remove it
    if (location.startsWith(basePath)) {
      pathWithoutBase = location.slice(basePath.length) || "/";
    }
    // If location doesn't start with base path but is just "/", keep it
    else if (location === "/") {
      pathWithoutBase = "/";
    }
  }

  // Debug: log the routing info (remove in production if needed)
  if (import.meta.env.DEV) {
    console.log("Router Debug:", { base, basePath, location, pathWithoutBase });
  }

  return (
    <Switch location={pathWithoutBase}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
