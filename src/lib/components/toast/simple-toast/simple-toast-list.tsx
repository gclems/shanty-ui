import { useToastManager } from "@/lib/hooks/use-toast-manager";

import { SimpleToast } from "./simple-toast";

const SimpleToastList = () => {
  const { toasts } = useToastManager();
  return toasts.map((toast) => <SimpleToast key={toast.id} toast={toast} />);
};

export { SimpleToastList };
