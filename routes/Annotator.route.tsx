/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Route } from "../core";
import { type Annotator } from "./Annotator";

export default {
  path: "/annotator",
  component: () => import(/* webpackChunkName: "settings" */ "./Annotator"),
  response: () => ({
    title: "Add Annotation",
  }),
} as Route<Annotator>;
