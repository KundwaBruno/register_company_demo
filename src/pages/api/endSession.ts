/* eslint-disable import/no-extraneous-dependencies */
import STORED_USER_TOKEN_NAMESPACE from "@/utils/constants/store";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const login = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(STORED_USER_TOKEN_NAMESPACE, "undefined", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    }),
  );
  res.statusCode = 200;
  res.json({ success: true, message: "Session ended successfully" });
};

export default login;
