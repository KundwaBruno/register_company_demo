/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import Select from "react-tailwindcss-select";
import { SelectProps } from "react-tailwindcss-select/dist/components/type";

interface ISelectInputProps {
  label: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
}

function SelectInput(props: ISelectInputProps & SelectProps) {
  const { label, required, errorMessage } = props;

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor="name" className="text-sm">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      <Select
        {...props}
        classNames={{
          menuButton: ({ isDisabled }: any) =>
            `flex rounded-md border text-gray-500 border-gray-300 caret-primary focus:border-primary focus:outline-none focus:ring ${
              isDisabled
                ? "bg-gray-100"
                : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            }`,
        }}
      />
      {errorMessage && (
        <span className="text-xs font-medium text-red-400">{errorMessage}</span>
      )}
    </div>
  );
}

export default SelectInput;
