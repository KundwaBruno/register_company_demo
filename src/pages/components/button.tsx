/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButtonProps {
  children: React.ReactNode;
}

function Button(
  props: IButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
) {
  const { children } = props;

  return (
    <button
      type="submit"
      className="hover:bg-primary bg-primary cursor-pointer rounded px-4 py-2 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
