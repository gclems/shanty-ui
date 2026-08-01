import type { ComponentProps } from "react";

import "./table.css";

function Root({ ...props }: ComponentProps<"table">) {
	return (
		<div data-slot="table-container">
			<table data-slot="table" {...props} />
		</div>
	);
}

function Header({ ...props }: React.ComponentProps<"thead">) {
	return <thead data-slot="table-header" {...props} />;
}

function Body({ ...props }: React.ComponentProps<"tbody">) {
	return <tbody data-slot="table-body" {...props} />;
}

function Footer({ ...props }: React.ComponentProps<"tfoot">) {
	return <tfoot data-slot="table-footer" {...props} />;
}

function Row({ ...props }: React.ComponentProps<"tr">) {
	return <tr data-slot="table-row" {...props} />;
}

function HeaderCell({ ...props }: React.ComponentProps<"th">) {
	return <th data-slot="table-head" {...props} />;
}

function Cell({ ...props }: React.ComponentProps<"td">) {
	return <td data-slot="table-cell" {...props} />;
}
function Caption({ ...props }: React.ComponentProps<"caption">) {
	return <caption data-slot="table-caption" {...props} />;
}

const Table = Object.assign(Root, {
	Header,
	Body,
	Footer,
	Row,
	HeaderCell,
	Cell,
	Caption,
});

export { Table };
