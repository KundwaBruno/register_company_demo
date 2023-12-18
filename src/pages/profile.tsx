import CompanyForm from "@/components/companyForm";
import Header from "@/components/header";
import Head from "next/head";

function Profile() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Edit company</title>
      </Head>
      <Header />
      <div className="mt-5 p-3">
        <CompanyForm
          title="My Company"
          isEdit
          payload={{
            name: "Microsoft Inc",
            sector: 2,
            agreeToTerms: true,
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
