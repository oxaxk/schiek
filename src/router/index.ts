import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";
import type { RouteObject } from "react-router-dom";

let navigateResolver!: (navigate: NavigateFunction) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: NavigateFunction;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes as RouteObject[]);
  const navigate = useNavigate();
  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  }, [navigate]);
  return element;
}
