import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { StoreLocator } from "./components/StoreLocator";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { FAQ } from "./components/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "locations", Component: StoreLocator },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "faq", Component: FAQ }
    ],
  },
]);
