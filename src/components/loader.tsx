/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import { RotatingLines } from "react-loader-spinner";

interface Props {
  color?: string;
}

function Loader({ color }: Props) {
  return (
    <RotatingLines
      strokeColor={color ?? "grey"}
      strokeWidth="5"
      animationDuration="0.75"
      width="23"
      visible
    />
  );
}

export default Loader;
