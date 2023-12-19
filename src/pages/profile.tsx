import CompanyForm from "@/components/companyForm";
import Header from "@/components/header";
import { getCompanyInfo } from "@/lib/firebase/companies";
import routes from "@/utils/constants/routes";
import STORED_USER_TOKEN_NAMESPACE from "@/utils/constants/store";
import { ICompanyInfo } from "@/utils/types/t_companyInfo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface ProfileProps {
  companyId: string;
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async (
  context,
) => {
  const { [STORED_USER_TOKEN_NAMESPACE]: companyId } = context.req.cookies;

  if (!companyId || companyId === "undefined") {
    return {
      redirect: {
        destination: routes.register.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      companyId,
    },
  };
};

function Profile({ companyId }: ProfileProps) {
  const [companyInfo, setCompanyInfo] = useState<ICompanyInfo>();

  useEffect(() => {
    getCompanyInfo(companyId, (data) => {
      setCompanyInfo(data);
    });
  }, [companyId]);

  return (
    <div className="profile-bg absolute inset-0 w-screen">
      <Head>
        <title>Edit company</title>
      </Head>
      <Header companyInfo={companyInfo} />
      <div className="p-3 md:mt-5">
        <CompanyForm
          title="Edit Info"
          isEdit
          payload={companyInfo}
          companyId={companyId}
        />
      </div>
    </div>
  );
}

export default Profile;
