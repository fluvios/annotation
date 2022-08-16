/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Route } from "../core";
import { type SignUp } from "./SignUp";

export default {
  path: "/signup",
  component: () => import(/* webpackChunkName: "settings" */ "./SignUp"),
  response: () => ({
    title: "SignUp",
  }),
} as Route<SignUp>;
