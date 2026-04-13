import { createFileRoute } from "@tanstack/react-router";

import { Badge } from "@/index";

export const Route = createFileRoute("/badge")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-4">
			{[
				"neutral",
				"custom",
				"primary",
				"secondary",
				"success",
				"destructive",
				"warning",
				"info",
			].map((color) => (
				<Badge key={color} color={color}>
					{color}
				</Badge>
			))}
		</div>
	);
}
