import { createFileRoute } from "@tanstack/react-router";

import { CurrencyInput } from "@/index";
import {
  Checkbox,
  CheckboxGroup,
  Field,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@/index";

export const Route = createFileRoute("/form")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <Item title="Input (independant)">
        <Input placeholder="Type something..." />
      </Item>
      <Item title="Field">
        <Field description="This is a description" label="Field label" required>
          <Input placeholder="Type something" />
        </Field>
      </Item>

      <Item title="Currency">
        <Field description="This is a description" label="Field label" required>
          <CurrencyInput placeholder="Type something" />
        </Field>
      </Item>

      <Item title="Checkbox">
        <Checkbox label="Accept terms and conditions" />
      </Item>

      <Item title="Checkbox Group">
        <CheckboxGroup>
          <Checkbox value="fuji-apple" label="Fuji Apple" />
          <Checkbox value="granny-smith" label="Granny Smith" />
          <Checkbox value="honeycrisp" label="Honeycrisp" />
        </CheckboxGroup>
      </Item>

      <Item title="Radio Group">
        <RadioGroup>
          <Radio value="fuji-apple" label="Fuji Apple" />
          <Radio value="granny-smith" label="Granny Smith" />
          <Radio value="honeycrisp" label="Honeycrisp" />
        </RadioGroup>
      </Item>

      <Item title="Combobox">
        <Select
          searchable
          placeholder="Fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
          ]}
        />
      </Item>
      <Item title="Select">
        <Select
          placeholder="Fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
          ]}
        />
      </Item>
    </div>
  );
}

function Item({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
