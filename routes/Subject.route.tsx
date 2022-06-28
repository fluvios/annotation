/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Route } from "../core";
import { type Subject } from "./Subject";

export default {
  path: "/subject",
  component: () => import(/* webpackChunkName: "settings" */ "./Subject"),
  response: () => ({
    title: "Add Material",
  }),
} as Route<Subject>;
