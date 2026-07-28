import { type ComponentPropsWithoutRef, Fragment, type ReactNode } from "react";
import "./data-list.css";

function Root({ ...props }: ComponentPropsWithoutRef<"dl">) {
	return <dl data-slot="data-list" {...props} />;
}

function Label({ ...props }: ComponentPropsWithoutRef<"dt">) {
	return <dt data-slot="data-list-label" {...props} />;
}

function Value({ ...props }: ComponentPropsWithoutRef<"dd">) {
	return <dd data-slot="data-list-value" {...props} />;
}

function Item({
	label,
	value,
	...props
}: ComponentPropsWithoutRef<typeof Fragment> & {
	label: ReactNode;
	value: ReactNode;
}) {
	return (
		<Fragment {...props}>
			<Label>{label}</Label>
			<Value>{value}</Value>
		</Fragment>
	);
}

const DataList = Object.assign(Root, { Root, Label, Value, Item });

export { DataList };
