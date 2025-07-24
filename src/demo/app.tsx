/* eslint-disable react/no-unescaped-entities */
import { UserIcon } from "lucide-react";

import {
  AlertError,
  AlertInfo,
  AlertPrimitive,
  AlertWarning,
  Badge,
  Button,
  Checkbox,
  DialogPrimitive,
  Field,
  Input,
  Label,
  Password,
  Providers,
  RadioGroup,
  RadioTab,
  SheetPrimitive,
  SidebarPrimitive,
  SimpleAccordion,
  SimpleAvatar,
  SimpleDialog,
  SimplePopover,
  SimpleSheet,
  SimpleTooltip,
  Table,
  useToastManager,
} from "../index";

import { Sidebar } from "./sidebar";

function InnerApp() {
  const toastManager = useToastManager();

  return (
    <>
      <Sidebar />
      <main className="p-4">
        <SidebarPrimitive.Trigger />
        <div className="flex gap-4">
          <SimpleAvatar
            src="https://avatars.githubusercontent.com/u/100626?v=4"
            className="bg-blue-500 text-white"
            fallback="CG"
          />
          <SimpleAvatar fallback="CG" className="bg-blue-500 text-white" />
        </div>

        <div className="mt-8 w-1/2 px-10">
          <SimpleAccordion.Root>
            <SimpleAccordion.Item title="What is Base UI?">
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </SimpleAccordion.Item>

            <SimpleAccordion.Item title="How do I get started?">
              Head to the “Quick start” guide in the docs. If you’ve used
              unstyled libraries before, you’ll feel at home.
            </SimpleAccordion.Item>

            <SimpleAccordion.Item title="Can I use it for my project?">
              Of course! Base UI is free and open source.
            </SimpleAccordion.Item>
          </SimpleAccordion.Root>
        </div>

        <div className="m-4 flex gap-x-4 p-4">
          {[
            "primary",
            "secondary",
            "neutral",
            "info",
            "success",
            "warning",
            "error",
          ].map((color) => (
            <Badge
              key={color}
              color={
                color as
                  | "primary"
                  | "secondary"
                  | "neutral"
                  | "info"
                  | "success"
                  | "warning"
                  | "error"
              }
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
        <div className="m-4 flex gap-x-4 p-4">
          {[
            "primary",
            "secondary",
            "neutral",
            "info",
            "success",
            "warning",
            "error",
          ].map((color) => (
            <Badge
              key={color}
              color={
                color as
                  | "primary"
                  | "secondary"
                  | "neutral"
                  | "info"
                  | "success"
                  | "warning"
                  | "error"
              }
            >
              <UserIcon />
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>

        <div className="m-4 space-y-4 p-4">
          <AlertPrimitive.Root color="info">
            <AlertPrimitive.Title>Info alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is an info alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>
          <AlertPrimitive.Root color="info">
            <UserIcon />
            <AlertPrimitive.Title>Info alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is an info alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>

          <AlertPrimitive.Root color="warning">
            <UserIcon />
            <AlertPrimitive.Title>Warning alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is a warning alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>
          <AlertPrimitive.Root color="warning">
            <AlertPrimitive.Title>Warning alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is a warning alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>

          <AlertPrimitive.Root color="error">
            <AlertPrimitive.Title>Error alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is an error alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>
          <AlertPrimitive.Root color="error">
            <UserIcon />
            <AlertPrimitive.Title>Error alert</AlertPrimitive.Title>
            <AlertPrimitive.Description>
              This is an error alert. It contains important information for the
              user.
            </AlertPrimitive.Description>
          </AlertPrimitive.Root>
        </div>

        <div className="m-4 space-y-4 p-4">
          <AlertInfo.Root>
            <AlertInfo.Title>Info alert</AlertInfo.Title>
            <AlertInfo.Description>
              This is an info alert. It contains important information for the
              user.
            </AlertInfo.Description>
          </AlertInfo.Root>

          <AlertWarning.Root>
            <AlertWarning.Title>Info alert</AlertWarning.Title>
            <AlertWarning.Description>
              This is an info alert. It contains important information for the
              user.
            </AlertWarning.Description>
          </AlertWarning.Root>

          <AlertError.Root>
            <AlertError.Title>Info alert</AlertError.Title>
            <AlertError.Description>
              This is an info alert. It contains important information for the
              user.
            </AlertError.Description>
          </AlertError.Root>
        </div>

        <div className="m-4 grid grid-cols-2 p-4">
          <div className="space-y-4">
            <div className="space-x-4">
              <SimpleTooltip content="This is a primary button with a tooltip.">
                <Button
                  onClick={() => {
                    toastManager.add({
                      title: `Primary button clicked`,
                      description: "This is a toast notification.",
                    });
                  }}
                  variant="primary"
                >
                  Primary
                </Button>
              </SimpleTooltip>
              <Button variant="primary">
                <UserIcon /> Primary
              </Button>
              <Button variant="primary" square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary">
                <UserIcon /> Secondary
              </Button>
              <Button variant="secondary" square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="destructive">Destructive</Button>
              <Button variant="destructive">
                <UserIcon /> Destructive
              </Button>
              <Button variant="destructive" square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="ghost">Ghost</Button>
              <Button variant="ghost">
                <UserIcon /> Ghost
              </Button>
              <Button variant="ghost" square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="link">Link</Button>
              <br />
              <Button variant="link">
                <UserIcon /> Link
              </Button>
              <br />
              <Button variant="link" square>
                <UserIcon />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-x-4">
              <Button variant="primary" render={<a />}>
                Primary
              </Button>
              <Button variant="primary" render={<a />}>
                <UserIcon /> Primary
              </Button>
              <Button variant="primary" render={<a />} square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="secondary" render={<a />}>
                Secondary
              </Button>
              <Button variant="secondary" render={<a />}>
                <UserIcon /> Secondary
              </Button>
              <Button variant="secondary" render={<a />} square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="destructive" render={<a />}>
                Destructive
              </Button>
              <Button variant="destructive" render={<a />}>
                <UserIcon /> Destructive
              </Button>
              <Button variant="destructive" render={<a />} square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="ghost" render={<a />}>
                Ghost
              </Button>
              <Button variant="ghost" render={<a />}>
                <UserIcon /> Ghost
              </Button>
              <Button variant="ghost" render={<a />} square>
                <UserIcon />
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="link" render={<a />}>
                Link
              </Button>
              <br />
              <Button variant="link" render={<a />}>
                <UserIcon /> Link
              </Button>
              <br />
              <Button variant="link" render={<a />} square>
                <UserIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-4 px-4">
          <DialogPrimitive.Root>
            <DialogPrimitive.Trigger>
              <Button variant="ghost">Dialog primitive</Button>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Backdrop />
              <DialogPrimitive.Popup>
                <DialogPrimitive.Title>Notifications</DialogPrimitive.Title>
                <DialogPrimitive.Description>
                  You are all caught up. Good job!
                </DialogPrimitive.Description>

                <div>Here's the dialog content</div>

                <DialogPrimitive.Footer>
                  <DialogPrimitive.Close>
                    <Button variant="ghost">Close</Button>
                  </DialogPrimitive.Close>
                  <DialogPrimitive.Close>
                    <Button variant="destructive">Acknowledge</Button>
                  </DialogPrimitive.Close>
                </DialogPrimitive.Footer>
              </DialogPrimitive.Popup>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
        <div className="mx-4 px-4">
          <SimpleDialog.Root>
            <SimpleDialog.Trigger>
              <Button variant="ghost">Simple Dialog</Button>
            </SimpleDialog.Trigger>
            <SimpleDialog.Popup>
              <SimpleDialog.Header
                title="Notifications"
                description="You are all caught up. Good job!"
              />

              <div>Here's the dialog content</div>

              <SimpleDialog.Footer>
                <SimpleDialog.Close>
                  <Button variant="ghost">Close</Button>
                </SimpleDialog.Close>
                <SimpleDialog.Close>
                  <Button variant="destructive">Acknowledge</Button>
                </SimpleDialog.Close>
              </SimpleDialog.Footer>
            </SimpleDialog.Popup>
          </SimpleDialog.Root>
        </div>

        <div className="mx-4 px-4">
          <SheetPrimitive.Root>
            <SheetPrimitive.Trigger>
              <Button variant="ghost">Sheet primitive</Button>
            </SheetPrimitive.Trigger>
            <SheetPrimitive.Portal>
              <SheetPrimitive.Backdrop />
              <SheetPrimitive.Popup>
                <SheetPrimitive.Title>Notifications</SheetPrimitive.Title>
                <SheetPrimitive.Description>
                  You are all caught up. Good job!
                </SheetPrimitive.Description>

                <div>Here's the Sheet content</div>

                <SheetPrimitive.Footer>
                  <SheetPrimitive.Close>
                    <Button variant="ghost">Close</Button>
                  </SheetPrimitive.Close>
                  <SheetPrimitive.Close>
                    <Button variant="destructive">Acknowledge</Button>
                  </SheetPrimitive.Close>
                </SheetPrimitive.Footer>
              </SheetPrimitive.Popup>
            </SheetPrimitive.Portal>
          </SheetPrimitive.Root>
        </div>
        <div className="mx-4 px-4">
          <SimpleSheet.Root>
            <SimpleSheet.Trigger>
              <Button variant="ghost">Simple Sheet</Button>
            </SimpleSheet.Trigger>
            <SimpleSheet.Popup>
              <SimpleSheet.Header
                title="Notifications"
                description="You are all caught up. Good job!"
              />

              <div>Here's the Sheet content</div>

              <SimpleSheet.Footer>
                <SimpleSheet.Close>
                  <Button variant="ghost">Close</Button>
                </SimpleSheet.Close>
                <SimpleSheet.Close>
                  <Button variant="destructive">Acknowledge</Button>
                </SimpleSheet.Close>
              </SimpleSheet.Footer>
            </SimpleSheet.Popup>
          </SimpleSheet.Root>
        </div>

        <Field className="m-4 p-4">
          <Label htmlFor="test" required>
            Test input
          </Label>
          <Input id="test" name="test" placeholder="Type something..." />
        </Field>
        <Field className="m-4 p-4">
          <Label htmlFor="password" required>
            Test password
          </Label>
          <Password
            id="password"
            name="password"
            placeholder="Type something..."
          />
        </Field>

        <Field className="m-4 p-4">
          <Checkbox>Checkbox</Checkbox>
        </Field>

        <Field className="m-4 p-4">
          <RadioGroup.Root>
            <RadioGroup.Radio value="option1">Option 1</RadioGroup.Radio>
            <RadioGroup.Radio value="option2">Option 2</RadioGroup.Radio>
            <RadioGroup.Radio value="option3">Option 3</RadioGroup.Radio>
          </RadioGroup.Root>
        </Field>

        <Field className="m-4 p-4">
          <RadioTab.Root>
            <RadioTab.Radio value="option1">Option 1</RadioTab.Radio>
            <RadioTab.Radio value="option2">Option 2</RadioTab.Radio>
            <RadioTab.Radio value="option3">Option 3</RadioTab.Radio>
          </RadioTab.Root>
        </Field>

        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head fit>
                <Checkbox />
              </Table.Head>
              <Table.Head>Column 1</Table.Head>
              <Table.Head colSpan={2}>Column 2</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Head fit>
                <Checkbox />
              </Table.Head>
              <Table.Cell>Row 1, Cell 1</Table.Cell>
              <Table.Cell>Row 1, Cell 2</Table.Cell>
              <Table.Cell fit className="bg-red-300">
                Row 1, Cell 3
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Head fit>
                <Checkbox />
              </Table.Head>
              <Table.Cell>Row 2, Cell 1</Table.Cell>
              <Table.Cell>Row 2, Cell 2</Table.Cell>
              <Table.Cell fit>Row 2, Cell 3</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan={2}>Footer Cell 1</Table.Cell>
              <Table.Cell colSpan={2}>Footer Cell 2</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table.Root>

        <SimplePopover.Root>
          <SimplePopover.Trigger render={<Button>Popover</Button>} />
          <SimplePopover.Popup>
            <div>Hola buenos dias</div>
          </SimplePopover.Popup>
        </SimplePopover.Root>
      </main>
    </>
  );
}

const App = () => (
  <Providers>
    <InnerApp />
  </Providers>
);

export { App };
