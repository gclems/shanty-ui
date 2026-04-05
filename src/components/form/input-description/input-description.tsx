import { mergeProps, useRender } from "@base-ui/react";
import "./input-description.css";

interface InputDescriptionProps extends useRender.ComponentProps<"p"> {
	required?: boolean;
}

function InputDescription({ render, ...props }: InputDescriptionProps) {
	const element = useRender({
		defaultTagName: "p",
		render,
		props: mergeProps<"p">(
			{
				"data-slot": "input-description",
			} as React.ComponentPropsWithRef<"p">,
			props,
		),
	});

	return element;
}

export { InputDescription };
