/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { createFileRoute } from "@tanstack/react-router";

import { Card } from "@/index";

export const Route = createFileRoute("/card")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-6">
			<Card size="xs">
				<Card.Header title="Card title (xs)" />
				<Card.Body>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</Card.Body>
				<Card.Footer>Here's the footer</Card.Footer>
			</Card>

			<Card className="h-60" size="xl">
				<Card.Header title="Card with scroll (xl)" />
				<Card.ScrollableBody>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</Card.ScrollableBody>
				<Card.Footer>Here's the footer</Card.Footer>
			</Card>
		</div>
	);
}
