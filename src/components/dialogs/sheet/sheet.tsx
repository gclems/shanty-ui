import { useRef } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { Button } from "@/components/button/button";
import { ScrollArea } from "@/components/scroll-area/scroll-area";

import { Backdrop } from "../backdrop/backdrop";

import "./sheet.css";

function Root(props: BaseDialog.Root.Props) {
  return <BaseDialog.Root data-slot="sheet" {...props} />;
}

function Trigger(props: BaseDialog.Trigger.Props) {
  return (
    <BaseDialog.Trigger
      data-slot="sheet-trigger"
      render={<Button />}
      {...props}
    />
  );
}

function Popup({
  children,
  size = "md",
  ...props
}: BaseDialog.Popup.Props & {
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <BaseDialog.Portal>
      <Backdrop />
      <BaseDialog.Viewport data-slot="sheet-viewport">
        <ScrollArea
          style={{ position: undefined }}
          data-slot="sheet-scroll-area-viewport"
        >
          <BaseDialog.Popup
            ref={popupRef}
            initialFocus={popupRef}
            data-size={size}
            {...props}
            data-slot="sheet-popup"
            className="group/sheet"
          >
            {children}
          </BaseDialog.Popup>
        </ScrollArea>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}

const Sheet = Object.assign(Root, { Root, Trigger, Popup });

export { Sheet };
