"use client";

import type * as React from "react";

import { fr } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

import type { Button } from "@/index";

// import "./calendar.css";

function Calendar({
	// className,
	// classNames,
	// showOutsideDays = true,
	// captionLayout = "label",
	locale = fr,
	// formatters,
	// components,
	...props
}: React.ComponentProps<typeof DayPicker> & {
	buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
	return <DayPicker mode="single" locale={locale} {...props} />;
}

export { Calendar };
