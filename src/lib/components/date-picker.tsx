import * as React from "react";

import { format, Locale } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Matcher } from "react-day-picker";

import { cn } from "../tools/cn";

import { Calendar } from "./calendar";
import { SimplePopover } from "./popovers/simple-popover";

interface DatePickerProps {
  name?: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  dateFormat?: string;
  locale?: Locale;
  selected?: Date | null;
  onSelect?: (date: Date | null) => void | undefined;
  min?: Date | undefined;
  max?: Date | undefined;
  clearable?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Choisir",
  dateFormat = "dd/MM/yyyy",
  locale = undefined,
  selected = undefined,
  onSelect = undefined,
  min = undefined,
  max = undefined,
  clearable = false,
}) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const [date, setDate] = React.useState<Date | null>(selected ?? null);

  const isControlled = selected !== undefined;

  const handleSelect = (val: Date | undefined) => {
    if (!val) return;

    onSelect?.(val ?? null);
    setDate(val ?? null);
    setIsOpened(false);
  };

  const hidden: Matcher | Matcher[] | undefined = React.useMemo(() => {
    if (!min && !max) {
      return undefined;
    }

    const hddn = [];
    if (min) {
      hddn.push({ before: min });
    }
    if (max) {
      hddn.push({ after: max });
    }

    return hddn;
  }, [min, max]);

  return (
    <SimplePopover.Root
      open={isOpened}
      onOpenChange={setIsOpened}
      modal="trap-focus"
    >
      <SimplePopover.Trigger
        nativeButton
        className={cn(
          "flex items-center justify-center px-4 py-1",
          "w-[150px] justify-start text-left font-normal",
          "bg-input-background text-input-foreground border-input-border border",
          "rounded-sm",
          {
            "text-muted-foreground": !date,
          },
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? (
          format(date, dateFormat)
        ) : (
          <span className="text-input-placeholder">{placeholder}</span>
        )}
      </SimplePopover.Trigger>

      <SimplePopover.Popup>
        <div className="w-auto p-0">
          <Calendar
            mode="single"
            locale={locale}
            required={false}
            selected={(isControlled ? selected : date) ?? undefined}
            onSelect={handleSelect}
            autoFocus
            fixedWeeks
            hidden={hidden}
          />
        </div>
      </SimplePopover.Popup>
    </SimplePopover.Root>
  );
};

export { DatePicker };
