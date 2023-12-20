/* eslint-disable import/no-extraneous-dependencies */
import { SelectValue } from "react-tailwindcss-select/dist/components/type";

export interface ICompanyInfo {
  name: string;
  sectors: SelectValue;
  agreeToTerms: boolean;
}
