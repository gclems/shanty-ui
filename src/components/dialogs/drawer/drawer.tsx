import { Drawer as BaseDrawer } from "@base-ui/react/drawer";

import { Button } from "@/components/button/button";

import "./drawer.css";

import { type ComponentProps, type ReactNode, useRef } from "react";

import { XIcon } from "lucide-react";

import { ScrollArea } from "@/components/scroll-area/scroll-area";

import { Backdrop } from "../backdrop/backdrop";

function Root(props: BaseDrawer.Root.Props) {
	return <BaseDrawer.Root data-slot="drawer-root" {...props} />;
}

function Trigger(props: BaseDrawer.Trigger.Props) {
	return (
		<BaseDrawer.Trigger
			data-slot="drawer-trigger"
			render={<Button />}
			{...props}
		/>
	);
}

function Popup({
	children,
	size = "md",
	side = "right",
	...props
}: BaseDrawer.Popup.Props & {
	side?: "right" | "left";
	size?: "sm" | "md" | "lg" | "xl";
}) {
	const popupRef = useRef<HTMLDivElement>(null);

	return (
		<BaseDrawer.Portal data-slot="drawer-portal">
			<Backdrop />
			<BaseDrawer.Viewport data-slot="drawer-viewport">
				<BaseDrawer.Popup
					{...props}
					ref={popupRef}
					initialFocus={popupRef}
					data-slot="drawer-popup"
					data-side={side}
					data-size={size}
				>
					{children}
					<BaseDrawer.Close
						render={<Button variant="light" color="neutral" />}
						data-sub-slot="drawer-top-close-button"
					>
						<XIcon />
					</BaseDrawer.Close>
				</BaseDrawer.Popup>
			</BaseDrawer.Viewport>
		</BaseDrawer.Portal>
	);
}

function Header({
	title,
	description,
	...props
}: ComponentProps<"div"> & {
	title?: ReactNode;
	description?: ReactNode;
}) {
	return (
		<div {...props}>
			{!!title && (
				<BaseDrawer.Title data-slot="drawer-title">{title}</BaseDrawer.Title>
			)}
			{!!description && (
				<BaseDrawer.Description data-slot="drawer-description">
					{description}
				</BaseDrawer.Description>
			)}
		</div>
	);
}

function Body(props: ComponentProps<"div">) {
	return (
		<ScrollArea data-sub-slot="drawer-body-scroll" vertical>
			<div data-slot="drawer-body" {...props} />
		</ScrollArea>
	);
}

function CloseButton({
	render = <Button variant="light" color="neutral" />,
	...props
}: BaseDrawer.Close.Props) {
	return <BaseDrawer.Close render={render} {...props} />;
}

function Footer(props: ComponentProps<"div">) {
	return <div data-slot="drawer-footer" {...props} />;
}

const Drawer = Object.assign(Root, {
	Root,
	Trigger,
	Popup,
	Header,
	Body,
	Footer,
	CloseButton,
	createHandle: BaseDrawer.createHandle,
});

export { Drawer };
