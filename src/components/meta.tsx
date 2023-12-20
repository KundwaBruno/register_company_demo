import Head from "next/head";

function Meta() {
  const fullName = "Company Register";
  const homeDescription = "Register your company completely free of charge";
  const prodUrl = "https://register-company-demo.vercel.app/";
  const metaImg =
    "https://res.cloudinary.com/dxyu6elli/image/upload/v1702996210/Screenshot_2023-12-19_at_16.29.58_afhmld.png";

  return (
    <Head>
      <title>Company Register</title>
      <link rel="shortcut icon" href="/logo.svg" />

      {/* <!-- Primary Meta Tags --> */}
      <title>{fullName}</title>
      <meta name="title" content={fullName} />
      <meta name="description" content={homeDescription} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="theme-color" content="#000000" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={prodUrl} />
      <meta property="og:title" content={fullName} />
      <meta property="og:description" content={homeDescription} />
      <meta property="og:image" content={metaImg} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={prodUrl} />
      <meta property="twitter:title" content={fullName} />
      <meta property="twitter:description" content={homeDescription} />
      <meta property="twitter:image" content={metaImg} />
    </Head>
  );
}

export default Meta;
