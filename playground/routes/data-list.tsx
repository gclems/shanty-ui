/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { createFileRoute } from "@tanstack/react-router";

import { DataList } from "@/index";

export const Route = createFileRoute("/data-list")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DataList>
			<DataList.Item label="Label" value="Value" />
			<DataList.Item label="Label 2" value="Value 2" />
			<DataList.Label>Label custom</DataList.Label>
			<DataList.Value>Value custom</DataList.Value>
		</DataList>
	);
}
