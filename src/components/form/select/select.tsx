import { Select as BaseSelect } from "@base-ui/react/select";
import { CheckIcon, ChevronDown } from "lucide-react";
import { cn } from "tailwind-variants";

import "./select.css";

type SelectItem = {
	value: string;
	label: string;
	[key: string]: unknown;
};

function Root({
	items,
	value,
	onValueChange,
	placeholder,
	className,
	itemTemplate = renderItem,
	...props
}: Omit<BaseSelect.Root.Props<SelectItem>, "onValueChange" | "items"> & {
	items: SelectItem[];
	onValueChange?: (value: string | null, item: SelectItem | null) => void;
	className?: string;
	placeholder?: string;
	itemTemplate?: (item: SelectItem) => React.ReactNode;
}) {
	const handleValueChange = (item: SelectItem | null) => {
		onValueChange?.(item?.value ?? null, item);
	};

	return (
		<BaseSelect.Root
			{...props}
			items={items}
			value={value}
			onValueChange={handleValueChange}
		>
			<BaseSelect.Trigger data-slot="select-trigger" className={cn(className)}>
				<BaseSelect.Value data-slot="select-value" placeholder={placeholder} />
				<BaseSelect.Icon data-slot="select-icon">
					<ChevronDown />
				</BaseSelect.Icon>
			</BaseSelect.Trigger>
			<BaseSelect.Portal>
				<BaseSelect.Positioner
					data-slot="select-positioner"
					className="outline-hidden select-none z-10"
					sideOffset={8}
				>
					<BaseSelect.Popup data-slot="select-popup">
						<BaseSelect.ScrollUpArrow data-slot="select-scroll-up-arrow" />
						<BaseSelect.List data-slot="select-list">
							{items.map((item) => itemTemplate(item))}
						</BaseSelect.List>
						<BaseSelect.ScrollDownArrow data-slot="select-scroll-down-arrow" />
					</BaseSelect.Popup>
				</BaseSelect.Positioner>
			</BaseSelect.Portal>
		</BaseSelect.Root>
	);
}

function Item(props: BaseSelect.Item.Props) {
	return <BaseSelect.Item data-slot="select-item" {...props} />;
}

function ItemIndicator(props: BaseSelect.ItemIndicator.Props) {
	return (
		<BaseSelect.ItemIndicator data-slot="select-item-indicator" {...props} />
	);
}

function ItemText(props: BaseSelect.ItemText.Props) {
	return <BaseSelect.ItemText data-slot="select-item-text" {...props} />;
}

const renderItem = (item: SelectItem) => (
	<Item key={item.value} value={item.value}>
		<ItemIndicator>
			<CheckIcon data-slot="item-indicator-icon" />
		</ItemIndicator>
		<ItemText>{item.label}</ItemText>
	</Item>
);

const Select = Object.assign(Root, { Root, Item, ItemIndicator, ItemText });

export { Select };
export type { SelectItem };
