import { createFileRoute } from "@tanstack/react-router";

import { Calendar } from "@/index";

export const Route = createFileRoute("/calendar")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-6">
			<Calendar />
			<Calendar mode="range" />
		</div>
	);
}
