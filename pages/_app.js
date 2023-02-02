import "../styles/globals.css";

import Layout from "../layouts/Layout";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
