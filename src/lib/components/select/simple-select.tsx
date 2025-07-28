import { ComponentProps, ReactNode, useMemo } from "react";

import { CheckIcon, ChevronDown } from "lucide-react";

import { SelectPrimitive } from "./primitives";

interface SimpleSelectItem {
  label: ReactNode;
  value: string | null;
}

const SimpleSelect = ({
  items,
  placeholder,
  ...props
}: Omit<ComponentProps<typeof SelectPrimitive.Root>, "items"> & {
  placeholder?: string;
  items?: SimpleSelectItem[];
}) => {
  const options: SimpleSelectItem[] = useMemo(() => {
    const opts = [...(items ?? [])];
    if (placeholder) {
      opts.unshift({
        label: <span className="text-input-placeholder">{placeholder}</span>,
        value: null,
      });
    }
    return opts;
  }, [items, placeholder]);

  return (
    <SelectPrimitive.Root {...props} items={options}>
      <SelectPrimitive.Trigger className="border-input-border text-input-foreground bg-input-background focus-visible:outline-input-ring flex h-10 min-w-36 select-none items-center justify-between gap-3 rounded-sm border pl-3.5 pr-3 text-base focus-visible:outline-2 focus-visible:-outline-offset-1">
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="flex">
          <ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner className="outline-none" sideOffset={8}>
          <SelectPrimitive.ScrollUpArrow className="bg-input-background top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-sm text-center text-xs before:absolute before:left-0 before:top-[-100%] before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
          <SelectPrimitive.Popup className="border-input-border bg-input-background text-input-foreground group max-h-[var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto rounded-sm border py-1 shadow-lg shadow-gray-200 outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[side=none]:data-[starting-style]:scale-100 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[starting-style]:opacity-100 data-[starting-style]:opacity-0 data-[ending-style]:transition-none data-[side=none]:data-[starting-style]:transition-none">
            {options.map(
              ({ label, value }: SimpleSelectItem, index: number) => (
                <SelectPrimitive.Item
                  key={index}
                  value={value}
                  className="data-[highlighted]:text-input-accent-foreground data-[highlighted]:before:bg-input-accent-background grid min-w-[var(--anchor-width)] cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pl-2.5 pr-4 text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4"
                >
                  <SelectPrimitive.ItemIndicator className="col-start-1">
                    <CheckIcon className="size-3" />
                  </SelectPrimitive.ItemIndicator>
                  <SelectPrimitive.ItemText className="col-start-2">
                    {label}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ),
            )}
          </SelectPrimitive.Popup>
          <SelectPrimitive.ScrollDownArrow className="bg-input-background bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-sm text-center text-xs before:absolute before:left-0 before:top-[-100%] before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export { SimpleSelect };
export type { SimpleSelectItem };
