import { Nav } from "@pg/nav";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Sidebar } from "@/index";

export const Route = createRootRoute({
	component: () => {
		return (
			<div className="flex w-full">
				<Nav />
				<main className="h-screen max-h-screen min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-4">
					<Sidebar.Trigger />
					<Outlet />
				</main>
			</div>
		);
	},
});
