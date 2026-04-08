import type { ComponentProps } from "react";

import "./input-group.css";

import { Input as BaseInput, mergeProps, useRender } from "@base-ui/react";

import { Button as ShantyButton } from "@/index";

function Root(props: ComponentProps<"div">) {
	return <div {...props} data-slot="input-group" />;
}

function Input({
	render = <BaseInput />,
	...props
}: useRender.ComponentProps<typeof BaseInput>) {
	const element = useRender({
		render,
		props: mergeProps<typeof BaseInput>(
			{
				"data-slot": "input-group-input",
			} as React.ComponentPropsWithRef<typeof BaseInput>,
			props,
		),
	});

	return element;
}

function Button({ type = "button", ...props }: ComponentProps<"button">) {
	return (
		<ShantyButton
			variant="light"
			square
			{...props}
			type={type}
			tabIndex={-1}
			data-sub-slot="input-group-button"
		/>
	);
}

const InputGroup = Object.assign(Root, { Input, Button });

export { InputGroup };
