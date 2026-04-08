import { type ComponentProps, useState } from "react";

import { EyeClosedIcon, EyeIcon } from "lucide-react";

import { InputGroup } from "../input-group/input-group";

function Password({
	ignorePasswordManagers = false,
	...props
}: Omit<ComponentProps<typeof InputGroup.Input>, "type"> & {
	ignorePasswordManagers?: boolean;
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<InputGroup>
			<InputGroup.Input
				type={showPassword ? "text" : "password"}
				{...props}
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
			<InputGroup.Button
				align="end"
				onMouseDown={() => setShowPassword(true)}
				onMouseUp={() => setShowPassword(false)}
				onMouseLeave={() => setShowPassword(false)}
			>
				{showPassword ? <EyeIcon /> : <EyeClosedIcon />}
			</InputGroup.Button>
		</InputGroup>
	);
}

export { Password };
