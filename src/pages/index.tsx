/* eslint-disable import/no-extraneous-dependencies */

import CompanyForm from "@/components/companyForm";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main
      className={`${inter.className} h-screen w-screen items-center justify-center p-3 md:flex `}
    >
      <Head>
        <title>Register company</title>
      </Head>
      <CompanyForm title="Register" />
    </main>
  );
}

export default Home;
