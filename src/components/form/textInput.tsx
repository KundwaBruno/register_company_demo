/* eslint-disable react/jsx-props-no-spreading */

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ITextInputProps {
  label: string;
}

function TextInput(
  props: ITextInputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) {
  const { label, required } = props;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      <input
        className="rounded border border-gray-300 px-3 py-2 caret-primary focus:border-primary focus:outline-none focus:ring"
        {...props}
      />
    </div>
  );
}

export default TextInput;
