import type { ComponentProps } from "react";
import "./badge.css";

function badge({
	color = "neutral",
	...props
}: ComponentProps<"div"> & {
	color?:
		| "neutral"
		| "custom"
		| "primary"
		| "secondary"
		| "success"
		| "error"
		| "warning"
		| "info";
}) {
	return <div data-slot="badge" data-color={color} {...props} />;
}

export { badge };
