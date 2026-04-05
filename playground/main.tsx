import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import { ShantyRoot } from "@/index";

import { routeTree } from "./routeTree.gen";

import "@pg/index.css";

// Create a new router instance
const router = createRouter({
  routeTree,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ShantyRoot toast tooltip sidebar>
      <RouterProvider router={router} />
    </ShantyRoot>,
  );
}
