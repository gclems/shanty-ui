import type { ComponentProps } from "react";
import "./badge.css";

function Badge({
	color = "neutral",
	...props
}: ComponentProps<"div"> & {
	color?:
		| "neutral"
		| "primary"
		| "secondary"
		| "success"
		| "destructive"
		| "warning"
		| "info";
}) {
	return <div data-slot="badge" data-color={color} {...props} />;
}

export { Badge };
