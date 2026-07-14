import { Switch as Primitive } from "@base-ui/react/switch";

import "./switch.css";

function Switch({
	color = "primary",
	...props
}: Primitive.Root.Props & {
	color?:
		| "primary"
		| "secondary"
		| "neutral"
		| "info"
		| "success"
		| "warning"
		| "destructive";
}) {
	return (
		<Primitive.Root data-slot="switch" data-color={color} {...props}>
			<Primitive.Thumb data-slot="switch-thumb" />
		</Primitive.Root>
	);
}

export { Switch };
