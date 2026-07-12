import type { ComponentProps } from "react";

import "./card.css";

import { ScrollArea } from "../scroll-area/scroll-area";

function Root(props: ComponentProps<"div"> & ComponentProps<typeof Header>) {
	return <div data-slot="card" {...props} />;
}

function Header({
	title,
	description,
}: {
	title?: React.ReactNode;
	description?: React.ReactNode;
}) {
	return (
		<div data-slot="card-header">
			{!!title && <h2 data-slot="card-title">{title}</h2>}
			{!!description && <div data-slot="card-description">{description}</div>}
		</div>
	);
}

function Body({ children, ...props }: ComponentProps<"div">) {
	return (
		<div data-slot="card-body" {...props}>
			<ScrollArea data-card-slot="scroll-area" vertical>
				{children}
			</ScrollArea>
		</div>
	);
}

function Footer(props: ComponentProps<"div">) {
	return <div data-slot="card-footer" {...props} />;
}

const Card = Object.assign(Root, { Header, Body, Footer });

export { Card };
