import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

import "./fieldset.css";

function Root({
	legend,
	children,
	...props
}: BaseFieldset.Root.Props & {
	legend?: React.ReactNode;
}) {
	return (
		<BaseFieldset.Root data-slot="fieldset-root" {...props}>
			{legend && <Legend>{legend}</Legend>}
			{children}
		</BaseFieldset.Root>
	);
}

function Legend({ ...props }: BaseFieldset.Legend.Props) {
	return <BaseFieldset.Legend data-slot="fieldset-legend" {...props} />;
}

const Fieldset = Object.assign(Root, { Root, Legend });

export { Fieldset };
