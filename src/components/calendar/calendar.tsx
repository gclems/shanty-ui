import { type ComponentProps, createElement, useEffect, useRef } from "react";

import { type Locale, add, format, formatters, sub } from "date-fns";
import { fr } from "date-fns/locale";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { type DayButton, DayPicker, Nav } from "react-day-picker";
import { cn } from "tailwind-variants";

import "./calendar.css";

function Calendar({
	locale = fr,
	showOutsideDays = true,
	showWeekNumber = false,
	className,
	mode = "single",
	fixedWeeks = true,
	startMonth = sub(new Date(), { years: 10 }),
	endMonth = add(new Date(), { years: 10 }),
	dayTemplate = DayButtonTemplate,
	...props
}: Omit<ComponentProps<typeof DayPicker>, "captionLayout"> & {
	dayTemplate?: (
		props: ComponentProps<typeof DayButtonTemplate>,
	) => React.JSX.Element;
}) {
	return (
		<DayPicker
			mode={mode}
			showWeekNumber={showWeekNumber}
			showOutsideDays={showOutsideDays}
			fixedWeeks={fixedWeeks}
			locale={locale}
			className={cn("calendar", className)}
			captionLayout="dropdown"
			startMonth={startMonth}
			endMonth={endMonth}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString(locale?.code, { month: "short" }),
				...formatters,
			}}
			components={{
				Root: ({ className, rootRef, ...props }) => {
					return (
						<div
							data-slot="calendar"
							ref={rootRef}
							className={cn(className)}
							{...props}
						/>
					);
				},
				DayButton: ({ modifiers, day, ...props }) =>
					createElement(dayTemplate, {
						...props,
						locale,
						modifiers,
						day,
						"data-day": format(day.date, "yyyy-MM-dd"),
						"data-selected-single":
							modifiers.selected &&
							!modifiers.range_start &&
							!modifiers.range_end &&
							!modifiers.range_middle,
						"data-range-start": modifiers.range_start,
						"data-range-end": modifiers.range_end,
						"data-range-middle": modifiers.range_middle,
					}),
				WeekNumber: ({ children, ...props }) => {
					return (
						<td {...props}>
							<div data-slot="calendar-week-number">{children}</div>
						</td>
					);
				},
				Months: (props) => <div data-slot="calendar-months" {...props} />,
				Nav: (props) => <Nav data-slot="calendar-nav" {...props} />,
				MonthCaption: ({ calendarMonth, displayIndex, ...props }) => (
					<div
						data-slot="calendar-month-caption"
						data-month={format(calendarMonth.date, "yyyy-MM")}
						{...props}
					/>
				),
				CaptionLabel: () => <span />,
				Chevron: ({ orientation, ...props }) => {
					if (orientation === "right") {
						return <ChevronRightIcon data-slot="calendar-nav-chevron" {...props} />;
					}
					return <ChevronLeftIcon data-slot="calendar-nav-chevron" {...props} />;
				},
				DropdownNav: (props) => <div data-slot="calendar-dropdowns" {...props} />,
				MonthsDropdown: ({ options, components, classNames, ...props }) => (
					<div data-slot="calendar-dropdown">
						<select id="months-dropdown" {...props}>
							{options?.map((o) => (
								<option key={o.value} value={o.value}>
									{o.label}
								</option>
							))}
						</select>
					</div>
				),
				YearsDropdown: ({ options, components, classNames, ...props }) => (
					<div data-slot="calendar-dropdown">
						<select id="years-dropdown" {...props}>
							{options?.map((o) => (
								<option key={o.value} value={o.value}>
									{o.label}
								</option>
							))}
						</select>
					</div>
				),
			}}
			{...props}
		/>
	);
}

function DayButtonTemplate({
	modifiers,
	locale,
	day,
	...props
}: ComponentProps<typeof DayButton> & {
	locale?: Partial<Locale>;
	"data-day": string;
	"data-selected-single"?: boolean;
	"data-range-start"?: boolean;
	"data-range-end"?: boolean;
	"data-range-middle"?: boolean;
}) {
	const ref = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);

	return (
		<button type="button" data-slot="calendar-day-button" {...props}></button>
	);
}

export { Calendar, DayButtonTemplate };
