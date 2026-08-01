import { createFileRoute } from "@tanstack/react-router";

import { Alert } from "@/index";

export const Route = createFileRoute("/alert")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-4">
			{[
				"info",
				"success",
				"warning",
				"destructive",
				"info-discrete",
				"success-discrete",
				"warning-discrete",
				"destructive-discrete",
			].map((color) => (
				// biome-ignore lint/suspicious/noExplicitAny: osef
				<Alert key={color} color={color as any}>
					This is an {color} alert.
				</Alert>
			))}
		</div>
	);
}
