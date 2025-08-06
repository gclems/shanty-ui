import type { ComponentProps } from "react";

import { ScrollArea } from "@base-ui-components/react";

const SimpleScrollArea = (props: ComponentProps<"div">) => (
  <ScrollArea.Root className="h-full w-full">
    <ScrollArea.Viewport className="h-full w-full overscroll-contain">
      <div {...props} />
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar className="bg-scrollbar-background flex w-1 justify-center rounded opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:delay-0 data-[hovering]:duration-75 data-[scrolling]:duration-75">
      <ScrollArea.Thumb className="bg-scrollbar-thumb w-full rounded" />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
);

export { SimpleScrollArea };
