import { createFileRoute } from "@tanstack/react-router";

import { PreviewCard } from "@/index";

export const Route = createFileRoute("/preview-card")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PreviewCard>
			<PreviewCard.Trigger>Open preview card</PreviewCard.Trigger>
			<PreviewCard.Popup>This is the preview card content.</PreviewCard.Popup>
		</PreviewCard>
	);
}
