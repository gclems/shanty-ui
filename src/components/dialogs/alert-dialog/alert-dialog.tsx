import { ComponentProps, useRef } from "react";

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

import { Backdrop } from "../backdrop/backdrop";

import "./alert-dialog.css";

function Root(props: BaseAlertDialog.Root.Props) {
  return <BaseAlertDialog.Root {...props} />;
}

function Trigger(props: BaseAlertDialog.Trigger.Props) {
  return <BaseAlertDialog.Trigger render={<Button />} {...props} />;
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
        className="alert-dialog-popup group/alert-dialog"
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  );
}

function Title({ className, ...props }: BaseAlertDialog.Title.Props) {
  return (
    <BaseAlertDialog.Title
      className={cn(className, "alert-dialog-title")}
      {...props}
    />
  );
}

function Body({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(className, "alert-dialog-body")} {...props}>
      {children}
    </div>
  );
}

function CloseButton({
  render = <Button variant="light" color="neutral" />,
  ...props
}: BaseAlertDialog.Close.Props) {
  return <BaseAlertDialog.Close render={render} {...props} />;
}

function Footer({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn(className, "alert-dialog-footer")} {...props} />;
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
