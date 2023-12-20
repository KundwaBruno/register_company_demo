/* eslint-disable import/no-extraneous-dependencies */
import Button from "@/components/button";
import CheckBox from "@/components/form/checkbox";
import SelectInput from "@/components/form/select";
import TextInput from "@/components/form/textInput";
import { regiserCompany, updateCompany } from "@/lib/firebase/companies";
import getCompanySectors from "@/lib/firebase/sectors";
import routes from "@/utils/constants/routes";
import { ICompanyFormProps } from "@/utils/types/t_companyForm";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Options,
  SelectValue,
} from "react-tailwindcss-select/dist/components/type";

function CompanyForm({ title, payload, isEdit, companyId }: ICompanyFormProps) {
  const [name, setName] = useState<string>("");
  const [selectedSectors, setSelectedSectors] = useState<SelectValue>(null);
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [selectErrorMsg, setSelectErrorMsg] = useState<string>("");
  const { push: changeRoute } = useRouter();

  const [sectors, setSectors] = useState<Options>([]);

  const handleErrors = (e: string) => {
    toast.error(e, {
      id: "register_key",
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSelectErrorMsg("");

    if (!selectedSectors) {
      setSelectErrorMsg("Select atleast one sector");
      return;
    }

    const companyInfo = {
      name,
      sectors: selectedSectors,
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
    getCompanySectors((data) => {
      setSectors(data);
    });
  }, []);

  useEffect(() => {
    if (payload && isEdit) {
      const { name: nameToEdit, sectors: sectorToEdit } = payload;
      setName(nameToEdit);
      setSelectedSectors(sectorToEdit);
    }
  }, [isEdit, payload]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex max-w-[550px] flex-col gap-4 rounded-lg p-3 md:mx-auto md:bg-white md:p-8 md:shadow"
    >
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
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
        placeholder="Select sector"
        options={sectors}
        value={selectedSectors}
        onChange={(value) => setSelectedSectors(value)}
        required
        isMultiple
        isClearable
        primaryColor="#3B81F6"
        isSearchable
        loading={sectors.length === 0}
        isDisabled={sectors.length === 0}
        errorMessage={selectErrorMsg}
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
