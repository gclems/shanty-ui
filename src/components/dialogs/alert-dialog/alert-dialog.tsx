import { ComponentProps, useRef } from "react";

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { Button } from "@/components/button/button";

import { Backdrop } from "../backdrop/backdrop";

import "./alert-dialog.css";

function Root(props: BaseAlertDialog.Root.Props) {
  return <BaseAlertDialog.Root data-slot="alert-dialog" {...props} />;
}

function Trigger(props: BaseAlertDialog.Trigger.Props) {
  return (
    <BaseAlertDialog.Trigger
      data-slot="alert-dialog-trigger"
      render={<Button />}
      {...props}
    />
  );
}

function Popup({
  children,
  size = "md",
  ...props
}: BaseAlertDialog.Popup.Props & {
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <BaseAlertDialog.Portal>
      <Backdrop />
      <BaseAlertDialog.Popup
        ref={popupRef}
        initialFocus={popupRef}
        data-size={size}
        {...props}
        data-slot="alert-dialog-popup"
        className="group/alert-dialog"
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  );
}

function Title(props: BaseAlertDialog.Title.Props) {
  return <BaseAlertDialog.Title data-slot="alert-dialog-title" {...props} />;
}

function Body(props: ComponentProps<"div">) {
  return <div data-slot="alert-dialog-body" {...props} />;
}

function CloseButton({
  render = <Button variant="light" color="neutral" />,
  ...props
}: BaseAlertDialog.Close.Props) {
  return <BaseAlertDialog.Close render={render} {...props} />;
}

function Footer(props: ComponentProps<"div">) {
  return <div data-slot="alert-dialog-footer" {...props} />;
}

const AlertDialog = Object.assign(Root, {
  Root,
  Trigger,
  Popup,
  Title,
  Body,
  Footer,
  CloseButton,
  createHandle: BaseAlertDialog.createHandle,
});

export { AlertDialog };
