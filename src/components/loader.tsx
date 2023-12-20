/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import { Oval } from "react-loader-spinner";

interface Props {
  color?: string;
}

function Loader({ color }: Props) {
  return (
    <Oval
      height={20}
      width={20}
      color={color}
      visible
      ariaLabel="oval-loading"
      secondaryColor="#D7E2FD"
      strokeWidth={7}
      strokeWidthSecondary={7}
    />
  );
}

export default Loader;
