/* eslint-disable import/no-extraneous-dependencies */

import CompanyForm from "@/components/companyForm";
import Meta from "@/components/meta";

function Home() {
  return (
    <main className="profile-bg absolute inset-0 w-screen items-center justify-center p-3 md:flex">
      <Meta />
      <CompanyForm title="Register" />
    </main>
  );
}

export default Home;
