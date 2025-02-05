import { ChangeEventHandler, ReactElement } from "react";
import classNames from "classnames";

interface TextInputProps {
  containerClassName?: string;
  className?: string;
  screenReaderLabel: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string | undefined;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  spellCheck?: boolean;
  autoComplete?: string;
}

export default function TextInput({
  className,
  containerClassName,
  screenReaderLabel,
  id,
  name,
  placeholder,
  value,
  error = false,
  onChange,
  disabled = false,
  spellCheck = true,
  autoComplete = "",
}: TextInputProps): ReactElement {
  const inputBorderColor = getInputBorderColor(error);
  const ringColor = getInputRingColor(error);

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className="sr-only">
        {screenReaderLabel}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className={classNames(
          inputBorderColor,
          ringColor,
          "bg-fiatDarkGray text-fiatWhite placeholder-fiatLightGray block w-full rounded-md shadow-sm sm:text-sm h-12",
          className,
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
      />
    </div>
  );
}

function getInputBorderColor(error: boolean): string {
  const color = error
    ? "border-fiatRed focus:border-fiatRed"
    : "focus:border-fiatLightGray";

  return color;
}

function getInputRingColor(error: boolean): string {
  const color = error
    ? "focus:ring-fiatRed focus:border-fiatRed"
    : "focus:ring-fiatLightGray";

  return color;
}
