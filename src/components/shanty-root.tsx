import { Toast } from "./toast/toast";

import "./shanty-root.css";
import { Sidebar } from "./sidebar/sidebar";

function ShantyRoot({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  toast?: boolean;
  tooltip?: boolean;
  sidebar?: boolean;
}) {
  const compose = (child: React.ReactNode) => {
    let content = child;
    // if (props.tooltip) content = <TooltipProvider>{content}</TooltipProvider>;
    if (props.toast) content = <Toast.Provider>{content}</Toast.Provider>;
    if (props.sidebar) content = <Sidebar.Provider>{content}</Sidebar.Provider>;
    return content;
  };

  return (
    <div {...props} data-slot="shanty-root">
      {compose(children)}
    </div>
  );
}

export { ShantyRoot };
