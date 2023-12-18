/* eslint-disable react/jsx-props-no-spreading */

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ICheckBoxProps {
  label: string | React.ReactNode;
}

function CheckBox(
  props: ICheckBoxProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) {
  const { label } = props;

  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" {...props} />
      <label htmlFor="name" className="text-sm">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
