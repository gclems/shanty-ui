import { Tooltip } from "@base-ui/react";

import { Sidebar } from "./sidebar/sidebar";
import { Toast } from "./toast/toast";

import "./shanty-root.css";

function ShantyRoot({
	children,
	toast,
	tooltip,
	sidebar,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	toast?: boolean;
	tooltip?: boolean;
	sidebar?: boolean;
}) {
	const compose = (child: React.ReactNode) => {
		let content = child;
		if (tooltip) content = <Tooltip.Provider>{content}</Tooltip.Provider>;
		if (toast) content = <Toast.Provider>{content}</Toast.Provider>;
		if (sidebar) content = <Sidebar.Provider>{content}</Sidebar.Provider>;
		return content;
	};

	return (
		<div {...props} data-slot="shanty-root">
			{compose(children)}
		</div>
	);
}

export { ShantyRoot };
