import Avatar from "@/components/avatar";
import Button from "@/components/button";
import routes from "@/utils/constants/routes";
import STORED_USER_TOKEN_NAMESPACE from "@/utils/constants/store";
import { removeStorageItem } from "@/utils/functions/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import Badge from "../badge";

function Header() {
  const { push } = useRouter();

  const [routeLoading, setRouteLoading] = useState<boolean>(false);

  const endSession = () => {
    setRouteLoading(true);
    removeStorageItem(STORED_USER_TOKEN_NAMESPACE);
    push(routes.register.href).then(() => {
      setRouteLoading(false);
    });
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-container p-3">
      <div className="flex flex-1 items-center gap-2">
        <div>
          <Avatar name="M" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium text-primary">Microsoft Inc</div>
          <div className="text-gray-400">|</div>
          <Badge label="Bakery & confectionery products" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button loading={routeLoading} onClick={endSession}>
          End Session
        </Button>
      </div>
    </div>
  );
}

export default Header;
