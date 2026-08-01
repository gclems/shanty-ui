import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import "./scroll-area.css";

function Scrollbar(props: BaseScrollArea.Scrollbar.Props) {
	return (
		<BaseScrollArea.Scrollbar data-slot="scroll-bar" {...props}>
			<BaseScrollArea.Thumb data-slot="scroll-bar-thumb" />
		</BaseScrollArea.Scrollbar>
	);
}

function ScrollArea({
	vertical = false,
	horizontal = false,
	children,
	...props
}: BaseScrollArea.Root.Props & {
	vertical?: boolean;
	horizontal?: boolean;
}) {
	return (
		<BaseScrollArea.Root data-slot="scroll-area" {...props}>
			<BaseScrollArea.Viewport
				data-slot="scroll-area-viewport"
				data-horizontal={horizontal || undefined}
			>
				<BaseScrollArea.Content
					data-slot="scroll-area-content"
					data-vertical={vertical || undefined}
					data-horizontal={horizontal || undefined}
				>
					{children}
				</BaseScrollArea.Content>
			</BaseScrollArea.Viewport>
			{vertical && <Scrollbar orientation="vertical" />}
			{horizontal && <Scrollbar orientation="horizontal" />}
			{vertical && horizontal && (
				<BaseScrollArea.Corner data-slot="scroll-area-corner" />
			)}
		</BaseScrollArea.Root>
	);
}

export { ScrollArea };
