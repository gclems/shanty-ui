import { Input as BaseInput } from "@base-ui/react";
import "./input.css";

function Input({
	ignorePasswordManagers = false,
	...props
}: BaseInput.Props & { ignorePasswordManagers?: boolean }) {
	// const element = useRender({
	// 	render,
	// 	props: mergeProps<typeof BaseInput>(
	// 		{
	// 			"data-slot": "input",
	// 		} as React.ComponentPropsWithRef<typeof BaseInput>,
	// 		props,
	// 	),
	// });

	// return element;

	return (
		<BaseInput
			{...props}
			data-slot="input"
			/* automatically set autoComplete to off if ignorePasswordManagers is true and autoComplete is not provided */
			autoComplete={
				props.autoComplete ?? (ignorePasswordManagers ? "off" : undefined)
			}
			/* 1password */
			data-1p-ignore={ignorePasswordManagers ? "true" : undefined}
			/* LastPass */
			data-lpignore={ignorePasswordManagers ? "true" : undefined}
			/* Bitwarden */
			data-bwignore={ignorePasswordManagers ? "true" : undefined}
			/* Dashlane */
			data-form-type={ignorePasswordManagers ? "other" : undefined}
			/* Nordpass */
			data-np-ignore={ignorePasswordManagers ? "true" : undefined}
		/>
	);
}

export { Input };
