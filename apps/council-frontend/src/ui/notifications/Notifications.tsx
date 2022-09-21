import {Transition} from "@headlessui/react";
import classNames from "classnames";
import { ReactElement } from "react";
import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";

export function Notifications(): ReactElement {
  // tailwind hot toast yoinked from
  // https://codesandbox.io/s/qvjri?file=/src/App.js:183-771
  return (
    <Toaster>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="flex transform rounded bg-fiatDarkGray shadow-lg p-4 text-fiatWhite"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-2 max-w-prose">{resolveValue(t.message, t)}</p>
        </Transition>
      )}
    </Toaster>
  );
}
