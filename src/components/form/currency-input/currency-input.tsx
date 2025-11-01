import {
  type ChangeEvent,
  type ComponentProps,
  type FormEvent,
  useMemo,
  useState,
} from "react";

import { cn } from "tailwind-variants";

import { Input } from "../input/input";

import "./currency-input.css";

type InputProps = ComponentProps<typeof Input>;
type CurrencyInputProps = Omit<InputProps, "type" | "inputMode">;

const DECIMAL_SEPARATOR = ".";
const NON_DIGIT_REGEX = /\D/g;
const GROUPING_REGEX = /\B(?=(\d{3})+(?!\d))/g;
const LEADING_ZERO_REGEX = /^0+(?=\d)/;

type FormattedCurrencyParts = {
  formatted: string;
  majorText: string;
  minorText: string;
};

function sanitizeToDigits(value: InputProps["value"] | undefined): string {
  if (value == null) {
    return "";
  }

  const primitive = Array.isArray(value) ? (value[0] ?? "") : value;
  return String(primitive).replace(NON_DIGIT_REGEX, "");
}

function groupDigits(value: string): string {
  return value.replace(GROUPING_REGEX, " ");
}

function trimLeadingZeros(value: string): string {
  if (!value) {
    return "";
  }
  const trimmed = value.replace(LEADING_ZERO_REGEX, "");
  return trimmed === "" ? "0" : trimmed;
}

function formatCurrencyDigits(digits: string): FormattedCurrencyParts {
  if (!digits) {
    return { formatted: "", majorText: "", minorText: "" };
  }

  const minorRaw = digits.slice(-2);
  const minorText = minorRaw.padStart(2, "0");
  const majorRaw = digits.length > 2 ? digits.slice(0, -2) : "0";
  const majorNormalized = trimLeadingZeros(majorRaw);
  const majorText = groupDigits(majorNormalized);

  return {
    formatted: `${majorText}${DECIMAL_SEPARATOR}${minorText}`,
    majorText,
    minorText,
  };
}

function CurrencyInput({
  value,
  defaultValue,
  onChange,
  className,
  onBeforeInput,
  name,
  ...props
}: CurrencyInputProps) {
  const [internalDigits, setInternalDigits] = useState(() =>
    sanitizeToDigits(defaultValue),
  );
  const controlledDigits = useMemo(() => sanitizeToDigits(value), [value]);
  const isControlled = value !== undefined;
  const currentDigits = isControlled ? controlledDigits : internalDigits;

  const { formatted, majorText, minorText } = useMemo(
    () => formatCurrencyDigits(currentDigits),
    [currentDigits],
  );

  const showOverlay = formatted.length > 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextDigits = event.target.value.replace(NON_DIGIT_REGEX, "");

    if (!isControlled) {
      setInternalDigits(nextDigits);
    }

    if (onChange) {
      event.target.value = nextDigits;
      const baseUIEvent = Object.assign(event, {
        preventBaseUIHandler: () => {},
        baseUIHandlerPrevented: false,
      });
      onChange(baseUIEvent);
    }
  };

  const handleBeforeInput = (event: FormEvent<HTMLInputElement>) => {
    const nativeEvent = event.nativeEvent as InputEvent | undefined;
    const data = nativeEvent?.data;
    if (
      nativeEvent?.inputType === "insertText" &&
      data &&
      NON_DIGIT_REGEX.test(data)
    ) {
      event.preventDefault();
    }

    if (onBeforeInput) {
      const baseUIEvent = Object.assign(event, {
        data: data ?? "",
        preventBaseUIHandler: () => {},
        baseUIHandlerPrevented: false,
      }) as Parameters<NonNullable<CurrencyInputProps["onBeforeInput"]>>[0];
      onBeforeInput(baseUIEvent);
    }
  };

  return (
    <div className="currency-input">
      <Input
        {...props}
        type="text"
        inputMode="numeric"
        value={formatted}
        onChange={handleChange}
        onBeforeInput={handleBeforeInput}
        data-has-overlay={showOverlay ? "true" : undefined}
        className={cn(className, "currency-input-input")}
      />
      {name ? <input type="hidden" name={name} value={currentDigits} /> : null}
      {showOverlay && (
        <span aria-hidden="true" className="currency-input-overlay">
          <span className="currency-input-overlay-major">
            {majorText}
            {DECIMAL_SEPARATOR}
          </span>
          <span className="currency-input-overlay-minor">{minorText}</span>
        </span>
      )}
    </div>
  );
}

export { CurrencyInput };
