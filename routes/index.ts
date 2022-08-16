/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import annotator from "./Annotator.route";
import home from "./Home.route";
import legal from "./Legal.route";
import login from "./Login.route";
import settings from "./Settings.route";
import signup from "./SignUp.route";
import subject from "./Subject.route";

/**
 * Exports the list of application routes
 */
export default [home, login, signup, settings, subject, annotator,  ...legal] as const;
