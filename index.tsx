/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */
import history from "history/browser";
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { App } from "./common";

const root = createRoot(document.getElementById("root") as HTMLElement);
const data = (document.getElementById("data") as HTMLScriptElement).text;

// TODO: Initialize local store (Relay, Apollo, Redux, etc.)
// const store = createRelay({ data: JSON.parse(data) });

// Render the top-level React component
// root.render(<App history={history} />);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </React.StrictMode>
);
