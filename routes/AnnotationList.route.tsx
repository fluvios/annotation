/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Route } from "../core";
import { type AnnotationList } from "./AnnotationList";

export default {
  path: "/annotation-list",
  component: () => import(/* webpackChunkName: "settings" */ "./AnnotationList"),
  response: () => ({
    title: "Annotation List",
  }),
} as Route<AnnotationList>;
