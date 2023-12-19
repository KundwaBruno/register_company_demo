/* eslint-disable import/no-extraneous-dependencies */

import CompanyForm from "@/components/companyForm";
import Head from "next/head";

function Home() {
  return (
    <main className="home-bg h-screen w-screen items-center justify-center p-3 md:flex">
      <Head>
        <title>Register company</title>
      </Head>
      <CompanyForm title="Register" />
    </main>
  );
}

export default Home;
