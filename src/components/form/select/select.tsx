import { type ReactNode, useId } from "react";

import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { Select as BaseSelect } from "@base-ui/react/select";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronsUpDownIcon,
	XIcon,
} from "lucide-react";
import "./select.css";

interface SelectItem {
	label: string;
	value: string;
}

type BaseSelectProps = {
	searchable?: false;
} & {
	emptyMessage?: ReactNode;
	placeholder?: string;
	className?: string;
	options: SelectItem[];
} & BaseSelect.Root.Props<SelectItem>;

type BaseComboboxProps = {
	searchable: true;
} & {
	className?: string;
	options: SelectItem[];
	placeholder?: string;
	emptyMessage?: ReactNode;
} & BaseCombobox.Root.Props<SelectItem>;

type SelectProps = BaseSelectProps | BaseComboboxProps;

function Select({ searchable = false, options, id, ...props }: SelectProps) {
	const generatedId = useId();

	if (searchable) {
		return (
			<ComboboxRoot
				{...(props as BaseComboboxProps)}
				id={id ?? generatedId}
				items={options}
				itemToStringLabel={(item) => item.label}
				itemToStringValue={(item) => item.value}
			>
				{options.map((option) => (
					<ComboboxItem key={option.value} item={option} />
				))}
			</ComboboxRoot>
		);
	}

	return (
		<SelectRoot
			{...(props as BaseSelectProps)}
			id={id ?? generatedId}
			items={options}
		>
			{options.map((option) => (
				<SelectItem key={option.value} {...option} />
			))}
		</SelectRoot>
	);
}

function ComboboxRoot({
	id,
	placeholder,
	emptyMessage,
	children,
	...props
}: BaseComboboxProps) {
	return (
		<BaseCombobox.Root data-slot="combobox" {...props}>
			<div data-slot="select-input-wrapper">
				<BaseCombobox.Input
					id={id}
					placeholder={placeholder}
					data-slot="select-trigger"
				/>
				<div data-slot="select-icon-wrapper">
					<BaseCombobox.Clear
						data-slot="select-clear"
						className="combobox-clear"
						aria-label="Clear selection"
					>
						<XIcon />
					</BaseCombobox.Clear>
					<BaseCombobox.Trigger data-slot="select-icon" aria-label="Open popup">
						<ChevronDownIcon />
					</BaseCombobox.Trigger>
				</div>
			</div>

			<BaseCombobox.Portal>
				<BaseCombobox.Positioner data-slot="select-positioner" sideOffset={8}>
					<BaseCombobox.Popup data-slot="select-popup" className="group">
						<BaseCombobox.Empty data-slot="select-empty">
							{emptyMessage}
						</BaseCombobox.Empty>
						<BaseCombobox.List data-slot="select-list">{children}</BaseCombobox.List>
					</BaseCombobox.Popup>
				</BaseCombobox.Positioner>
			</BaseCombobox.Portal>
		</BaseCombobox.Root>
	);
}

function SelectRoot({ id, placeholder, children, ...props }: BaseSelectProps) {
	return (
		<BaseSelect.Root id={id} data-slot="select" {...props}>
			<BaseSelect.Trigger data-slot="select-trigger">
				<BaseSelect.Value data-slot="select-value" placeholder={placeholder} />
				<BaseSelect.Icon data-slot="select-icon">
					<ChevronsUpDownIcon />
				</BaseSelect.Icon>
			</BaseSelect.Trigger>
			<BaseSelect.Portal>
				<BaseSelect.Positioner data-slot="select-positioner" sideOffset={8}>
					<BaseSelect.Popup data-slot="select-popup" className="group">
						<BaseSelect.ScrollUpArrow data-slot="select-arrow-up" />
						<BaseSelect.List data-slot="select-list">{children}</BaseSelect.List>
						<BaseSelect.ScrollDownArrow data-slot="select-arrow-down" />
					</BaseSelect.Popup>
				</BaseSelect.Positioner>
			</BaseSelect.Portal>
		</BaseSelect.Root>
	);
}

function SelectItem({ label, value }: SelectItem) {
	return (
		<BaseSelect.Item value={value} data-slot="select-item">
			<BaseSelect.ItemIndicator data-slot="select-item-indicator">
				<CheckIcon />
			</BaseSelect.ItemIndicator>
			<BaseSelect.ItemText data-slot="select-item-text">
				{label}
			</BaseSelect.ItemText>
		</BaseSelect.Item>
	);
}

function ComboboxItem({ item }: { item: SelectItem }) {
	return (
		<BaseCombobox.Item value={item} data-slot="select-item">
			<BaseCombobox.ItemIndicator data-slot="select-item-indicator">
				<CheckIcon />
			</BaseCombobox.ItemIndicator>
			<div data-slot="select-item-text">{item.label}</div>
		</BaseCombobox.Item>
	);
}

export { Select };
export type { SelectItem };
