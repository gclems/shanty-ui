/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { createFileRoute } from "@tanstack/react-router";

import { Card } from "@/index";

export const Route = createFileRoute("/card")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Card>
			<Card.Header title="Card title" />
			<Card.Body>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
			</Card.Body>
			<Card.Footer></Card.Footer>
		</Card>
	);
}
