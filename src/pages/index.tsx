import { Inter } from "next/font/google";
import Button from "./components/button";
import CheckBox from "./components/form/checkbox";
import SelectInput from "./components/form/select";
import TextInput from "./components/form/textInput";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main
      className={`${inter.className} flex h-screen w-screen items-center justify-center `}
    >
      <form className="bg-container mx-auto flex flex-col gap-4 rounded-lg p-8">
        <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight">
          Register
        </h2>
        <TextInput
          label="Company Name"
          name="name"
          placeholder="Enter company name"
          required
        />
        <SelectInput
          label="Sectors"
          name="sector"
          placeholder="Select sector"
          required
        />
        <CheckBox
          name="terms"
          label={
            <>
              By proceeding, I Agree to{" "}
              <span className="text-primary">Terms</span> and{" "}
              <span className="text-primary">Conditions</span> that applies.
            </>
          }
        />
        <Button>Save</Button>
      </form>
    </main>
  );
}

export default Home;
