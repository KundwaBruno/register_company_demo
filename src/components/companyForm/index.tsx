/* eslint-disable import/no-extraneous-dependencies */
import Button from "@/components/button";
import CheckBox from "@/components/form/checkbox";
import SelectInput from "@/components/form/select";
import TextInput from "@/components/form/textInput";
import routes from "@/utils/constants/routes";
import STORED_USER_TOKEN_NAMESPACE from "@/utils/constants/store";
import {
  getLocalStorageItem,
  storeItemInLocalStorage,
} from "@/utils/functions/storage";
import { ICompanyFormProps } from "@/utils/types/t_companyForm";
import { push, ref, set } from "firebase/database";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { uuid } from "uuidv4";

import database from "@/lib/firebase";

function CompanyForm({ title, payload, isEdit }: ICompanyFormProps) {
  const [name, setName] = useState<string>("");
  const [sector, setSector] = useState<number>();
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const { push: changeRoute } = useRouter();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const sessionId = getLocalStorageItem(STORED_USER_TOKEN_NAMESPACE);
    } else {
      const userId = uuid();
      storeItemInLocalStorage({
        itemName: STORED_USER_TOKEN_NAMESPACE,
        value: userId,
      });
      const feedbackListRef = ref(database, "companies");
      const newFeedbackRef = push(feedbackListRef);
      setRequestLoading(true);
      set(newFeedbackRef, {
        ownerId: userId,
        name,
        sector,
        agreeToTerms,
      })
        .then(() => {
          changeRoute(routes.profile.href).then(() => {
            setRequestLoading(false);
          });
        })
        .catch(() => {
          setRequestLoading(false);
          alert("Something went wrong, Please try again!");
        });
    }
  };

  useEffect(() => {
    if (payload && isEdit) {
      const { name: nameToEdit, sector: sectorToEdit } = payload;
      setName(nameToEdit);
      setSector(sectorToEdit);
    }
  }, [isEdit, payload]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex max-w-[550px] flex-col gap-4 rounded-lg bg-container p-8 md:mx-auto"
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      <TextInput
        label="Company Name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter company name"
        required
      />
      <SelectInput
        label="Sectors"
        name="sector"
        placeholder="Select sector"
        onChange={(e) => setSector(Number(e.target.value))}
        value={sector}
        required
      />
      {!isEdit && (
        <CheckBox
          name="terms"
          checked={agreeToTerms}
          onChange={(e) => {
            setAgreeToTerms(e.target.checked);
          }}
          label={
            <>
              By proceeding, I Agree to{" "}
              <span className="text-primary">Terms</span> and{" "}
              <span className="text-primary">Conditions</span> that applies.
            </>
          }
          required
        />
      )}

      <Button loading={requestLoading} disabled={requestLoading}>
        {isEdit ? "Save" : "Register"}
      </Button>
    </form>
  );
}

export default CompanyForm;
