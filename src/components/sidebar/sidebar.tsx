import {
	type ComponentProps,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import { mergeProps, useRender } from "@base-ui/react";
import { PanelLeftIcon } from "lucide-react";
import { cn } from "tailwind-variants";

import { Button, Drawer, useIsMobile } from "@/index";
import "./sidebar.css";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}

	return context;
}

function Provider({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	style,
	children,
	...props
}: ComponentProps<"div"> & {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = useState(false);
	// This is the internal state of the sidebar.
	// We use openProp and setOpenProp for control from outside the component.
	const [_open, _setOpen] = useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = useCallback(
		(value: boolean | ((value: boolean) => boolean)) => {
			const openState = typeof value === "function" ? value(open) : value;
			if (setOpenProp) {
				setOpenProp(openState);
			} else {
				_setOpen(openState);
			}
			// This sets the cookie to keep the sidebar state.
			// biome-ignore lint/suspicious/noDocumentCookie: Shadcn's example uses cookies to persist the sidebar state, so we need to ignore this lint warning.
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
		[setOpenProp, open],
	);
	// Helper to toggle the sidebar.
	const toggleSidebar = useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [isMobile, setOpen]);
	// Adds a keyboard shortcut to toggle the sidebar.
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
				(event.metaKey || event.ctrlKey)
			) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	// We add a state so that we can do data-state="expanded" or "collapsed".
	// This makes it easier to style the sidebar with Tailwind classes.
	const state = open ? "expanded" : "collapsed";
	const contextValue = useMemo<SidebarContextProps>(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<div data-slot="sidebar-wrapper" className={cn(className)} {...props}>
				{children}
			</div>
		</SidebarContext.Provider>
	);
}

function Root({
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
	children,
	dir,
	...props
}: ComponentProps<"div"> & {
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "offcanvas" | "icon";
}) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

	if (isMobile) {
		return (
			<Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
				<Drawer.Popup
					dir={dir}
					data-sidebar="sidebar"
					data-sub-slot="sidebar-drawer"
					data-mobile="true"
					side={side}
				>
					<Drawer.Header
						title="Sidebar"
						description="Displays the mobile sidebar."
					/>
					<Drawer.Body>{children}</Drawer.Body>
				</Drawer.Popup>
			</Drawer>
		);
	}

	return (
		<div
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : ""}
			data-variant={variant}
			data-side={side}
			data-slot="sidebar"
		>
			{/* This is what handles the sidebar gap on desktop */}
			<div data-slot="sidebar-gap" data-variant={variant} />
			<div
				data-slot="sidebar-container"
				data-side={side}
				className={cn(className)}
				{...props}
			>
				<div data-sidebar="sidebar" data-slot="sidebar-inner">
					{children}
				</div>
			</div>
		</div>
	);
}

function Content({ className, ...props }: ComponentProps<"ul">) {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={cn(className)}
		>
			<ul
				data-slot="sidebar-menu"
				data-sidebar="menu"
				className={cn(className)}
				{...props}
			/>
		</div>
	);
}

function Trigger({
	className,
	onClick,
	...props
}: ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();
	return (
		<Button
			data-sidebar="trigger"
			data-sub-slot="sidebar-trigger"
			variant="light"
			size="sm"
			square
			className={cn(className)}
			tabIndex={-1}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeftIcon />
			<span data-slot="sidebar-trigger-label">Toggle Sidebar</span>
		</Button>
	);
}

function Item({
	isActive = false,
	className,
	render,
	...props
}: useRender.ComponentProps<"button"> & { isActive?: boolean }) {
	const element = useRender({
		defaultTagName: "button",
		render,
		props: mergeProps<"button">(
			{
				"data-slot": "sidebar-item-button",
				"data-active": isActive,
			} as React.ComponentPropsWithRef<"button">,
			props,
		),
	});

	return (
		<li
			data-slot="sidebar-item"
			className={cn("group/menu-item relative text-sm", className)}
		>
			{element}
		</li>
	);
}

const Sidebar = Object.assign(Root, {
	Root,
	Provider,
	Trigger,
	Content,
	Item,
});

export { Sidebar, useSidebar };
