import { ICompanyInfo } from "./t_companyInfo";

export interface ICompanyFormProps {
  title: string;
  payload?: ICompanyInfo;
  isEdit?: boolean;
  companyId?: string;
}
