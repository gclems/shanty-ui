import { IMaskInput } from "react-imask";
import { cn } from "tailwind-variants";

import "../input/input.css";

function PhoneNumberInput({
	className,
	onChange,
	unmask = true,
	...props
}: {
	id?: string;
	name?: string;
	className?: string;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	"aria-invalid"?: boolean;
	onChange?: (value: string) => void;
	unmask?: boolean;
}) {
	const handleAccept = (value: string) => {
		onChange?.(value);
	};

	return (
		<IMaskInput
			data-slot="input"
			mask="00 00 00 00 00"
			className={cn(className)}
			{...props}
			onAccept={handleAccept}
			unmask={unmask}
		/>
	);
}

export { PhoneNumberInput };
