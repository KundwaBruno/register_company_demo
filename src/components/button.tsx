/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Loader from "./loader";

interface IButtonProps {
  children: React.ReactNode;
  loading: boolean;
}

function Button(
  props: IButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
) {
  const { children, loading } = props;

  return (
    <button
      type="submit"
      className="relative cursor-pointer rounded bg-primary px-3 py-2 text-sm text-white hover:bg-primary disabled:opacity-75 md:text-base"
      {...props}
    >
      {children}
      {loading && (
        <div className="absolute right-3 top-2">
          <Loader color="white" />
        </div>
      )}
    </button>
  );
}
export default Button;
