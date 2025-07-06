import { cn } from "@/tools/cn";
import { Avatar } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AvatarPrimitiveRoot = ({  className, ...props }: ComponentProps<typeof Avatar.Root>) => {
    return <Avatar.Root className={cn('size-12 rounded-full overflow-hidden flex items-center justify-center', className)} {...props} />
};

export { AvatarPrimitiveRoot };