import { type ComponentProps, useEffect, useState } from "react";
import "./date-input.css";

import { type Locale, format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Calendar, Popover } from "@/index";

function convertToInputValue(date?: Date | null): string {
	return date ? date.toISOString().split("T")[0] : "";
}

function defaultFormatter(date: Date, locale: Locale): string {
	return format(date, "dd/MM/yyyy", { locale });
}

function DateInput({
	value,
	onValueChange,
	defaultValue,
	formatter = defaultFormatter,
	locale = fr,
	placeholder = "Choisir une date",
	...props
}: Omit<
	ComponentProps<"input">,
	"type" | "value" | "onChange" | "defaultValue"
> & {
	value?: Date;
	defaultValue?: Date;
	onValueChange?: (value: Date | null) => void;
	formatter?: (date: Date, locale: Locale) => string;
	locale?: Locale;
	placeholder?: string;
}) {
	const [inputValue, setInputValue] = useState<Date | null>(
		defaultValue ?? value ?? null,
	);

	useEffect(() => {
		setInputValue(value ?? null);
	}, [value]);

	const handleSelectChange = (date: Date | null) => {
		setInputValue(date);
		onValueChange?.(date);
	};

	return (
		<div data-slot="date-input-wrapper">
			<input
				type="hidden"
				data-slot="date-input"
				value={convertToInputValue(inputValue)}
				{...props}
			/>
			<Popover>
				<Popover.Trigger
					render={
						<button type="button" data-slot="date-input-button">
							<CalendarIcon />
							&nbsp;
							{inputValue ? (
								formatter(inputValue, locale)
							) : (
								<div data-slot="date-input-placeholder">{placeholder}</div>
							)}
						</button>
					}
				/>
				<Popover.Popup className="w-auto p-0">
					<Calendar
						mode="single"
						selected={inputValue ?? undefined}
						onSelect={handleSelectChange}
						defaultMonth={inputValue ?? defaultValue ?? value ?? undefined}
						locale={locale}
					/>
				</Popover.Popup>
			</Popover>
		</div>
	);
}

export { DateInput };
