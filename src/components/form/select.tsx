/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-props-no-spreading */

import database from "@/lib/firebase";
import { ISectorOptions } from "@/utils/types/t_sector";
import { onValue, query, ref } from "firebase/database";
import { CaretDown } from "phosphor-react";
import {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from "react";
import Loader from "../loader";

interface ISelectInputProps {
  label: string;
  placeholder: string;
}

function SelectInput(
  props: ISelectInputProps &
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
) {
  const { label, placeholder, required } = props;

  const [optionsData, setOptionsData] = useState<ISectorOptions[]>();

  useEffect(() => {
    const q = query(ref(database, "options/"));
    onValue(q, (snapshot) => {
      const options = snapshot.val();
      setOptionsData(options);
    });
  }, []);

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor="name" className="text-sm">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      <div className="absolute bottom-2.5 right-3">
        {!optionsData ? <Loader /> : <CaretDown size={20} />}
      </div>
      <select
        id="sectors"
        className="appearance-none rounded border border-gray-300 px-3 py-2 placeholder:text-container focus:border-primary focus:outline-none focus:ring disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
        {...props}
        required
        disabled={!optionsData}
      >
        <option value="">{optionsData ? placeholder : "Loading.."}</option>
        {optionsData?.map((group) => (
          <optgroup key={group.group} label={group.group}>
            {group.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
