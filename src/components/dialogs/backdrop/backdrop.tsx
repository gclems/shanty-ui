import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import "./backdrop.css";

function Backdrop(props: BaseDialog.Backdrop.Props) {
  return <BaseDialog.Backdrop data-slot="dialog-backdrop" {...props} />;
}

export { Backdrop };
