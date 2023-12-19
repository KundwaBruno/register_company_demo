/* eslint-disable import/no-extraneous-dependencies */
import STORED_USER_TOKEN_NAMESPACE from "@/utils/constants/store";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const login = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(STORED_USER_TOKEN_NAMESPACE, req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 60,
      sameSite: "strict",
      path: "/",
    }),
  );
  res.statusCode = 200;
  res.json({ success: true, message: "Company key registered successfully!" });
};

export default login;
