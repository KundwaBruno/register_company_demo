/* eslint-disable import/no-extraneous-dependencies */
import database from "@/lib/firebase";
import { onValue, query, ref } from "firebase/database";
import { Options } from "react-tailwindcss-select/dist/components/type";

const getCompanySectors = async (callBack: (data: Options) => void) => {
  const q = query(ref(database, "options/"));
  onValue(q, (snapshot) => {
    const options = snapshot.val();
    const transformed = options?.map((opt: any) => ({
      label: opt.group,
      options: opt.options,
    }));
    callBack(transformed);
  });
};

export default getCompanySectors;
