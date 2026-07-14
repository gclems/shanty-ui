import { createFileRoute } from "@tanstack/react-router";

import { Switch } from "@/index";

export const Route = createFileRoute("/switch")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<label>
				<Switch color="primary" />
				Switch
			</label>
			<label>
				<Switch color="secondary" />
				Switch
			</label>
			<label>
				<Switch color="neutral" />
				Switch
			</label>
			<label>
				<Switch color="info" />
				Switch
			</label>
			<label>
				<Switch color="success" />
				Switch
			</label>
			<label>
				<Switch color="warning" />
				Switch
			</label>
			<label>
				<Switch color="destructive" />
				Switch
			</label>
		</div>
	);
}
