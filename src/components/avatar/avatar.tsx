import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

import { stringIsNullOrEmpty } from "@/tools/strings";

import { Tooltip } from "../tooltip/tooltip";
import "./avatar.css";

interface AvatarProps {
	src?: string;
	fallback?: string;
	className?: string;
	size?: "sm" | "default" | "lg";
	badge?: boolean;
	badgeColor?: "primary" | "secondary" | "success" | "warning" | "error";
	tooltip?: string;
}

interface AvatarGroupProps {
	avatars: AvatarProps[];
	show?: number;
	className?: string;
	size?: "sm" | "default" | "lg";
	badgeColor?: "primary" | "secondary" | "success" | "warning" | "error";
}

function Item({
	src,
	fallback,
	badge,
	className,
	size = "default",
	badgeColor = "primary",
	tooltip = fallback?.toUpperCase() ?? "",
}: AvatarProps) {
	return (
		<Tooltip content={tooltip}>
			<BaseAvatar.Root
				data-slot="avatar"
				data-size={size}
				className={cn("group/avatar", className)}
			>
				{!stringIsNullOrEmpty(src) && (
					<BaseAvatar.Image src={src} data-slot="avatar-image" />
				)}

				{!stringIsNullOrEmpty(fallback) && (
					<BaseAvatar.Fallback data-slot="avatar-fallback">
						{fallback}
					</BaseAvatar.Fallback>
				)}

				{badge && <span data-slot="avatar-badge" data-color={badgeColor} />}
			</BaseAvatar.Root>
		</Tooltip>
	);
}

function Group({
	avatars,
	show = avatars.length,
	size = "default",
	className,
	badgeColor,
}: AvatarGroupProps) {
	const rest = Math.max(0, avatars.length - show);
	return (
		<div
			data-slot="avatar-group"
			data-size={size}
			className={cn("group/avatar-group", className)}
		>
			{avatars.slice(0, show).map((a, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: Using index as key is acceptable here because the list is static and does not change order.
				<Item key={i} {...a} size={size} badgeColor={badgeColor} />
			))}
			{rest > 0 && (
				<div
					data-slot="avatar-group-count"
					className={cn(className)}
				>{`+${rest}`}</div>
			)}
		</div>
	);
}

const Avatar = Object.assign(Item, { Item, Group });

export { Avatar };
export type { AvatarGroupProps, AvatarProps };
