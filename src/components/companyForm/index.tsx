/* eslint-disable import/no-extraneous-dependencies */
import Button from "@/components/button";
import CheckBox from "@/components/form/checkbox";
import SelectInput from "@/components/form/select";
import TextInput from "@/components/form/textInput";
import { regiserCompany, updateCompany } from "@/lib/firebase/companies";
import routes from "@/utils/constants/routes";
import { ICompanyFormProps } from "@/utils/types/t_companyForm";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

function CompanyForm({ title, payload, isEdit, companyId }: ICompanyFormProps) {
  const [name, setName] = useState<string>("");
  const [sector, setSector] = useState<number>();
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const { push: changeRoute } = useRouter();

  const handleErrors = (e: string) => {
    toast.error(e, {
      id: "register_key",
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const companyInfo = {
      name,
      sector,
      agreeToTerms,
    };

    if (isEdit && companyId) {
      updateCompany({
        key: companyId,
        payload: companyInfo,
        callBack: () => {
          toast.success("Company profile saved successfully");
        },
        errorHandler: handleErrors,
        toggleLoadingState: setRequestLoading,
      });
    } else {
      regiserCompany({
        payload: companyInfo,
        callBack: () => {
          toast.success("Company registered successfully");
          changeRoute(routes.profile.href).then(() => {
            setRequestLoading(false);
          });
        },
        errorHandler: handleErrors,
        toggleLoadingState: setRequestLoading,
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
      className="flex max-w-[550px] flex-col gap-4 rounded-lg p-3 md:mx-auto md:bg-white md:p-8 md:shadow"
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
