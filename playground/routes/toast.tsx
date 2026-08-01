import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { Button, Toast } from "@/index";

export const Route = createFileRoute("/toast")({
  component: RouteComponent,
});

function RouteComponent() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = useState(0);

  function createToast(type?: string) {
    setCount((prev) => prev + 1);

    toastManager.add({
      title: `Toast ${count + 1} created (${type})`,
      description: "This is a toast notification.",
      type: type,
    });
  }

  return (
    <div>
      <Button onClick={() => createToast()}>Create Toast (default)</Button>
      <Button color="info" onClick={() => createToast("info")}>
        Create Toast (info)
      </Button>
      <Button color="success" onClick={() => createToast("success")}>
        Create Toast (success)
      </Button>

      <Button color="destructive" onClick={() => createToast("destructive")}>
        Create Toast (destructive)
      </Button>
      <Button color="warning" onClick={() => createToast("warning")}>
        Create Toast (warning)
      </Button>
    </div>
  );
}
