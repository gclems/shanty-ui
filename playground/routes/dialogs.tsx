import { createFileRoute } from "@tanstack/react-router";

import { AlertDialog } from "@/index";
import { Sheet } from "@/index";
import { Button } from "@/index";

export const Route = createFileRoute("/dialogs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Alert</div>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Normal</th>
          </tr>
        </thead>
        <tbody>
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <tr key={size}>
              <td>{size}</td>
              <td>
                <AlertDialog>
                  <AlertDialog.Trigger>Open (small)</AlertDialog.Trigger>
                  <AlertDialog.Popup size={size}>
                    <AlertDialog.Title>AlertDialog title</AlertDialog.Title>
                    <AlertDialog.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <AlertDialog.CloseButton>Cancel</AlertDialog.CloseButton>
                      <AlertDialog.CloseButton
                        render={<Button color="primary" />}
                      >
                        Confirm
                      </AlertDialog.CloseButton>
                    </AlertDialog.Footer>
                  </AlertDialog.Popup>
                </AlertDialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-xl font-semibold">Sheet</div>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Giant</th>
            <th>Normal</th>
          </tr>
        </thead>
        <tbody>
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <tr key={size}>
              <td>{size}</td>
              <td>
                <Sheet>
                  <Sheet.Trigger>Open (giant)</Sheet.Trigger>
                  <Sheet.Popup size={size}>
                    {Array.from({ length: 50 }).map((_, index) => (
                      <p key={index}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    ))}
                    {/* <Sheet.Header
                      title="Sheet title"
                      description="lala alala lalala lala l"
                    />
                    <Sheet.Body>
                      <div className="grid gap-2 @lg/dialog:grid-cols-2 @2xl/dialog:grid-cols-3">
                        {Array.from({ length: 50 }).map((_, index) => (
                          <p key={index}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        ))}
                      </div>
                    </Sheet.Body>
                    <Sheet.Footer>
                      <Sheet.CloseButton>Cancel</Sheet.CloseButton>
                      <Sheet.CloseButton render={<Button color="primary" />}>
                        Confirm
                      </Sheet.CloseButton>
                    </Sheet.Footer> */}
                  </Sheet.Popup>
                </Sheet>
              </td>
              <td>
                <Sheet>
                  <Sheet.Trigger>Open (small)</Sheet.Trigger>
                  <Sheet.Popup size={size}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Sheet.Popup>
                </Sheet>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
