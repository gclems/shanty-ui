import { ReactNode, useId } from "react";

import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { Select as BaseSelect } from "@base-ui/react/select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  XIcon,
} from "lucide-react";
import { cn } from "tailwind-variants";

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
        {options.map((option, index) => (
          <ComboboxItem key={index} item={option} />
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
      {options.map((option, index) => (
        <SelectItem key={index} {...option} />
      ))}
    </SelectRoot>
  );
}

function ComboboxRoot({
  id,
  className,
  placeholder,
  emptyMessage,
  children,
  ...props
}: BaseComboboxProps) {
  return (
    <>
      <BaseCombobox.Root {...props}>
        <div className={cn(className, "select-input-wrapper")}>
          <BaseCombobox.Input
            id={id}
            placeholder={placeholder}
            className="select-trigger"
          />
          <div className="select-icon-wrapper">
            <BaseCombobox.Clear
              className="select-clear combobox-clear"
              aria-label="Clear selection"
            >
              <XIcon />
            </BaseCombobox.Clear>
            <BaseCombobox.Trigger
              className="select-icon"
              aria-label="Open popup"
            >
              <ChevronDownIcon />
            </BaseCombobox.Trigger>
          </div>
        </div>

        <BaseCombobox.Portal>
          <BaseCombobox.Positioner className="select-positioner" sideOffset={8}>
            <BaseCombobox.Popup className="select-popup group">
              <BaseCombobox.Empty className="select-empty">
                {emptyMessage}
              </BaseCombobox.Empty>
              <BaseCombobox.List className="select-list">
                {children}
              </BaseCombobox.List>
            </BaseCombobox.Popup>
          </BaseCombobox.Positioner>
        </BaseCombobox.Portal>
      </BaseCombobox.Root>
    </>
  );
}

function SelectRoot({
  id,
  className,
  placeholder,
  children,
  ...props
}: BaseSelectProps) {
  return (
    <BaseSelect.Root id={id} {...props}>
      <BaseSelect.Trigger className={cn(className, "select-trigger")}>
        <BaseSelect.Value className="select-value" placeholder={placeholder} />
        <BaseSelect.Icon className="select-icon">
          <ChevronsUpDownIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="select-positioner" sideOffset={8}>
          <BaseSelect.Popup className="select-popup group">
            <BaseSelect.ScrollUpArrow className="select-arrow-up" />
            <BaseSelect.List className="select-list">
              {children}
            </BaseSelect.List>
            <BaseSelect.ScrollDownArrow className="select-arrow-down" />
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

function SelectItem({ label, value }: SelectItem) {
  return (
    <BaseSelect.Item value={value} className="select-item">
      <BaseSelect.ItemIndicator className="select-item-indicator">
        <CheckIcon />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText className="select-item-text">
        {label}
      </BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}

function ComboboxItem({ item }: { item: SelectItem }) {
  return (
    <BaseCombobox.Item value={item} className="select-item">
      <BaseCombobox.ItemIndicator className="select-item-indicator">
        <CheckIcon />
      </BaseCombobox.ItemIndicator>
      <div className="select-item-text">{item.label}</div>
    </BaseCombobox.Item>
  );
}

export { Select };
export type { SelectItem };
