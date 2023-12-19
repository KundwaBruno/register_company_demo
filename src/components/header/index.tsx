/* eslint-disable react/require-default-props */
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import routes from "@/utils/constants/routes";
import { ICompanyInfo } from "@/utils/types/t_companyInfo";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  companyInfo?: ICompanyInfo;
}

function Header({ companyInfo }: Props) {
  const { push } = useRouter();

  const [routeLoading, setRouteLoading] = useState<boolean>(false);

  const endSession = () => {
    setRouteLoading(true);
    fetch(routes.endSession.href, { method: "POST" }).then(() => {
      push(routes.register.href).then(() => {
        setRouteLoading(false);
      });
    });
  };

  return (
    <div className="flex min-h-[73px] items-center justify-between gap-5 bg-container p-3">
      <div className="flex flex-1 items-center gap-2">
        <div>
          <Avatar name={companyInfo?.name?.substring(0, 2) as string} />
        </div>
        <div className="flex items-center gap-2">
          <div className="md:text-md text-base font-medium text-primary">
            {companyInfo?.name}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          loading={routeLoading}
          disabled={routeLoading}
          onClick={endSession}
        >
          End Session
        </Button>
      </div>
    </div>
  );
}

export default Header;
