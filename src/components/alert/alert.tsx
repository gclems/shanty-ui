import type { ComponentProps } from "react";
import "./alert.css";

function Alert({
	color = "info",
	...props
}: ComponentProps<"div"> & {
	color:
		| "info"
		| "success"
		| "warning"
		| "destructive"
		| "info-discrete"
		| "success-discrete"
		| "warning-discrete"
		| "destructive-discrete";
}) {
	return <div {...props} data-slot="alert" data-color={color} />;
}

export { Alert };
