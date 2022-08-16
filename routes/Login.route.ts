/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Route } from "../core";
import { type Login } from "./Login";


export default {
  path: "/login",
  component: () => import(/* webpackChunkName: "settings" */ "./Login"),
  response: () => ({
    title: "Login",
  }),
} as Route<Login>;
