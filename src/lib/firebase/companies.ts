import database from "@/lib/firebase";
import routes from "@/utils/constants/routes";
import { ICompanyInfo } from "@/utils/types/t_companyInfo";
import { get, onValue, push, ref, set } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

interface GeneralProps {
  key?: string;
  payload: ICompanyInfo;
  callBack: () => void;
  toggleLoadingState: Dispatch<SetStateAction<boolean>>;
  errorHandler: (e: any) => void;
}

const companiesRef = ref(database, "companies");

const checkDuplicateCompanyName = (
  name: string,
  errorHandler: (message: string) => void,
  toggleLoadingState: Dispatch<SetStateAction<boolean>>,
  callBack: () => void,
  companyKey?: string,
) => {
  get(companiesRef).then((snapshot) => {
    if (snapshot.exists()) {
      const companies = snapshot.val();
      const duplicateName = Object.entries(companies).find(
        ([key, value]: any) => companyKey !== key && name === value.name,
      );

      if (duplicateName) {
        toggleLoadingState(false);
        errorHandler("This name is owned by another company");
      } else {
        callBack();
      }
    } else {
      callBack();
    }
  });
};

export const regiserCompany = async (params: GeneralProps) => {
  const { callBack, errorHandler, payload, toggleLoadingState } = params;
  toggleLoadingState(true);

  checkDuplicateCompanyName(
    payload.name,
    errorHandler,
    toggleLoadingState,
    () => {
      const newCompaniesRef = push(companiesRef);
      set(newCompaniesRef, payload)
        .then(() => {
          const token = newCompaniesRef.key;
          fetch(routes.saveSession.href, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }).then(() => {
            callBack();
          });
        })
        .catch((e) => {
          errorHandler(e);
        });
    },
  );
};

export const updateCompany = async (params: GeneralProps) => {
  const { callBack, errorHandler, payload, toggleLoadingState, key } = params;
  toggleLoadingState(true);
  checkDuplicateCompanyName(
    payload.name,
    errorHandler,
    toggleLoadingState,
    () => {
      const companiesListRef = ref(database, `companies/${key}`);
      set(companiesListRef, payload)
        .then(() => {
          callBack();
          toggleLoadingState(false);
        })
        .catch((e) => {
          errorHandler(e);
          toggleLoadingState(false);
        });
    },
    key,
  );
};

export const getCompanyInfo = async (
  key: string,
  callBack: (e: ICompanyInfo) => void,
) => {
  const companiesListRef = ref(database, `companies/${key}`);
  onValue(companiesListRef, (snapshot) => {
    const data = snapshot.val();
    callBack(data);
  });
};
