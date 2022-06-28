/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import home from "./Home.route";
import legal from "./Legal.route";
import settings from "./Settings.route";
import subject from "./Subject.route";

/**
 * Exports the list of application routes
 */
export default [home, settings, subject, ...legal] as const;
