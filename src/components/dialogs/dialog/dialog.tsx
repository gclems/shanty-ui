import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { Button } from "@/components/button/button";

import "./dialog.css";

import { type ComponentProps, type ReactNode, useRef } from "react";

import { XIcon } from "lucide-react";

import { ScrollArea } from "@/components/scroll-area/scroll-area";

import { Backdrop } from "../backdrop/backdrop";

function Root(props: BaseDialog.Root.Props) {
	return <BaseDialog.Root data-slot="dialog-root" {...props} />;
}

function Trigger(props: BaseDialog.Trigger.Props) {
	return (
		<BaseDialog.Trigger
			data-slot="dialog-trigger"
			render={<Button />}
			{...props}
		/>
	);
}

function Popup({
	children,
	size = "md",
	...props
}: BaseDialog.Popup.Props & {
	size?: "sm" | "md" | "lg" | "xl";
}) {
	const popupRef = useRef<HTMLDivElement>(null);

	return (
		<BaseDialog.Portal data-slot="dialog-portal">
			<Backdrop />
			<BaseDialog.Viewport data-slot="dialog-viewport">
				<ScrollArea style={{ position: undefined }}>
					<BaseDialog.Popup
						{...props}
						ref={popupRef}
						initialFocus={popupRef}
						data-slot="dialog-popup"
						data-size={size}
					>
						{children}
						<BaseDialog.Close
							render={<Button variant="light" color="neutral" />}
							data-sub-slot="dialog-top-close-button"
						>
							<XIcon />
						</BaseDialog.Close>
					</BaseDialog.Popup>
				</ScrollArea>
			</BaseDialog.Viewport>
		</BaseDialog.Portal>
	);
}

function Header({
	title,
	description,
}: {
	title?: ReactNode;
	description?: ReactNode;
}) {
	return (
		<div>
			{!!title && (
				<BaseDialog.Title data-slot="dialog-title">{title}</BaseDialog.Title>
			)}
			{!!description && (
				<BaseDialog.Description data-slot="dialog-description">
					{description}
				</BaseDialog.Description>
			)}
		</div>
	);
}

function Body(props: ComponentProps<"div">) {
	return <div data-slot="dialog-body" {...props} />;
}

function CloseButton({
	render = <Button variant="light" color="neutral" />,
	...props
}: BaseDialog.Close.Props) {
	return <BaseDialog.Close render={render} {...props} />;
}

function Footer(props: ComponentProps<"div">) {
	return <div data-slot="dialog-footer" {...props} />;
}

const Dialog = Object.assign(Root, {
	Root,
	Trigger,
	Popup,
	Header,
	Body,
	Footer,
	CloseButton,
	createHandle: BaseDialog.createHandle,
});

export { Dialog };
