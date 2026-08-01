import type { ComponentProps } from "react";

import { type ToastProviderProps, Tooltip } from "@base-ui/react";

import "./shanty-root.css";

import type { TooltipProviderProps } from "node_modules/@base-ui/react/tooltip/provider/TooltipProvider";

import { Sidebar } from "./sidebar/sidebar";
import { Toast } from "./toast/toast";

function ShantyRoot({
	children,
	toast,
	tooltip,
	sidebar,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	toast?: true | ToastProviderProps;
	tooltip?: true | TooltipProviderProps;
	sidebar?: true | ComponentProps<typeof Sidebar.Provider>;
}) {
	const compose = (child: React.ReactNode) => {
		let content = child;
		if (tooltip)
			content = (
				<Tooltip.Provider {...(typeof tooltip === "object" ? tooltip : {})}>
					{content}
				</Tooltip.Provider>
			);
		if (toast)
			content = (
				<Toast.Provider {...(typeof toast === "object" ? toast : {})}>
					{content}
				</Toast.Provider>
			);
		if (sidebar) {
			content = (
				<Sidebar.Provider {...(typeof sidebar === "object" ? sidebar : {})}>
					{content}
				</Sidebar.Provider>
			);
		}
		return content;
	};

	return (
		<div {...props} data-slot="shanty-root">
			{compose(children)}
		</div>
	);
}

export { ShantyRoot };
