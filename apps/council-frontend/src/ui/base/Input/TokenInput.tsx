import { ChangeEvent, ReactElement, useCallback } from "react";

import classNames from "classnames";
import Button from "src/ui/base/Button/Button";
import { ButtonSize, ButtonVariant } from "src/ui/base/Button/styles";
import { t } from "ttag";

interface TokenInputProps {
  className?: string;
  inputClassName?: string;
  screenReaderLabel: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string | undefined;
  error?: boolean;
  disabled?: boolean;
  showMaxButton?: boolean;
  maxValue?: string;
  onChange: (newValue: string) => void;
}

export default function TokenInput({
  className,
  inputClassName,
  screenReaderLabel,
  id,
  name,
  placeholder,
  value,
  error = false,
  disabled = false,
  showMaxButton = false,
  maxValue,
  onChange,
}: TokenInputProps): ReactElement {
  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newDepositAmount = event.target.value;
      onChange(newDepositAmount);
    },
    [onChange],
  );

  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {screenReaderLabel}
      </label>
      <div
        className={classNames("relative", {
          "pointer-events-none": disabled,
          "opacity-50": disabled,
        })}
      >
        <input
          disabled={disabled}
          type="text"
          name={name}
          id={id}
          className={classNames(
            "bg-fiatDarkGray border-fiatLightGray text-fiatWhite placeholder-fiatLightGray block h-12 w-full rounded-md shadow-sm sm:text-sm",
            {
              "focus:border-fiatLightGray": !error,
              "focus:ring-fiatLightGray": !error,
              "focus:border-fiatRed": error,
              "border-fiatRed": error,
              "focus:ring-fiatRed": error,
            },
            inputClassName,
          )}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
        />
        {showMaxButton && maxValue ? (
          <Button
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md px-2 py-1"
            variant={ButtonVariant.OUTLINE_LAVENDER}
            size={ButtonSize.SMALL}
            onClick={() => onChange(maxValue)}
            disabled={disabled}
          >
            <span className="text-xs text-fiatWhite">{t`MAX`}</span>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
