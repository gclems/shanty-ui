import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Nav } from "@pg/nav";

export const Route = createRootRoute({
  component: () => {
    {
      return (
        <div className="flex">
          <Nav />
          <main className="h-screen max-h-screen min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      );
    }
  },
});
