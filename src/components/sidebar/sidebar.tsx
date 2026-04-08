import {
	type CSSProperties,
	type ComponentProps,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import { PanelLeftIcon } from "lucide-react";

import { Button, Drawer, cn, useIsMobile } from "@/index";

import "./sidebar.css";

import { mergeProps, useRender } from "@base-ui/react";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
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
			<div
				data-slot="sidebar-wrapper"
				style={
					{
						"--sidebar-width": SIDEBAR_WIDTH,
						"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
						...style,
					} as CSSProperties
				}
				className={cn(
					"group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-surface",
					className,
				)}
				{...props}
			>
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
	collapsible?: "offcanvas" | "icon" | "none";
}) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") {
		return (
			<div
				data-slot="sidebar"
				className={cn(
					"flex h-full w-(--sidebar-width) flex-col bg-surface text-foreground",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	}
	if (isMobile) {
		return (
			<Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
				<Drawer.Popup
					dir={dir}
					data-sidebar="sidebar"
					data-slot="sidebar"
					data-mobile="true"
					className="w-(--sidebar-width) bg-surface p-0 text-foreground [&>button]:hidden"
					style={
						{
							"--sidebar-width": SIDEBAR_WIDTH_MOBILE,
						} as CSSProperties
					}
					side={side}
				>
					<Drawer.Header
						title="Sidebar"
						description="Displays the mobile sidebar."
						className="sr-only"
					/>
					<div className="flex h-full w-full flex-col">{children}</div>
				</Drawer.Popup>
			</Drawer>
		);
	}

	return (
		<div
			className="group peer hidden text-foreground md:block"
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : ""}
			data-variant={variant}
			data-side={side}
			data-slot="sidebar"
		>
			{/* This is what handles the sidebar gap on desktop */}
			<div
				data-slot="sidebar-gap"
				className={cn(
					"relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
					"group-data-[collapsible=offcanvas]:w-0",
					"group-data-[side=right]:rotate-180",
					variant === "floating" || variant === "inset"
						? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
				)}
			/>
			<div
				data-slot="sidebar-container"
				data-side={side}
				className={cn(
					"border-border",
					"fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex",
					// Adjust the padding for floating and inset variants.
					variant === "floating" || variant === "inset"
						? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
					className,
				)}
				{...props}
			>
				<div
					data-sidebar="sidebar"
					data-slot="sidebar-inner"
					className="flex size-full flex-col bg-surface group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border"
				>
					{children}
				</div>
			</div>
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
			variant="ghost"
			size="sm"
			square
			className={cn(className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeftIcon className="cn-rtl-flip" />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}

function Content({ className, ...props }: ComponentProps<"ul">) {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={cn(
				"no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
		>
			<ul
				data-slot="sidebar-menu"
				data-sidebar="menu"
				className={cn("flex w-full min-w-0 flex-col gap-0", className)}
				{...props}
			/>
		</div>
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
			className={cn("group/menu-item relative", className)}
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
