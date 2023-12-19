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
      className="relative flex cursor-pointer items-center  justify-center gap-2 rounded-md bg-primary px-5 py-2 text-sm text-white hover:bg-primary disabled:opacity-75 md:text-base"
      {...props}
    >
      {loading ? (
        <div className="">
          <Loader color="white" />
        </div>
      ) : null}
      {children}
    </button>
  );
}
export default Button;
