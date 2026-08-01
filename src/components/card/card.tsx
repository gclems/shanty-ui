import type { ComponentProps } from "react";

import "./card.css";

import { useRender } from "@base-ui/react";
import { mergeProps } from "node_modules/@base-ui/react/merge-props";

import { ScrollArea } from "../scroll-area/scroll-area";

interface RootProps extends useRender.ComponentProps<"div"> {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function Root({ size = "md", render, ...props }: RootProps) {
	const element = useRender({
		defaultTagName: "div",
		render,
		props: mergeProps<"div">(
			{
				"data-slot": "card",
				"data-size": size,
			} as React.ComponentPropsWithRef<"div">,
			props,
		),
	});

	return element;
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

function Body(props: ComponentProps<"div">) {
	return <div data-slot="card-body" {...props} />;
}

function ScrollableBody({ children, ...props }: ComponentProps<"div">) {
	return (
		<div data-slot="card-body" data-scrollable {...props}>
			<ScrollArea data-card-slot="scroll-area" vertical>
				{children}
			</ScrollArea>
		</div>
	);
}

function Footer(props: ComponentProps<"div">) {
	return <div data-slot="card-footer" {...props} />;
}

const Card = Object.assign(Root, { Header, Body, ScrollableBody, Footer });

export { Card };
