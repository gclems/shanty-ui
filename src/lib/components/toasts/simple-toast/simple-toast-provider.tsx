import { ReactNode } from "react";

import { ToastPrimitive } from "../primitives";

import { SimpleToastList } from "./simple-toast-list";

const SimpleToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ToastPrimitive.Provider>
      {children}
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport className="fixed bottom-[1rem] right-[1rem] top-auto mx-auto flex w-[250px] sm:bottom-[2rem] sm:right-[2rem] sm:w-[300px]">
          <SimpleToastList />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
};

export { SimpleToastProvider };
