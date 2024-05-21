//import type { AppProps } from "next/app";
import './index.css';
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";

import ReactDOM from 'react-dom/client';
// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
 <>

        {/* makes whole app scrollable and grey */}


        <NextUIProvider>

        <div className="h-screen w-screen overflow-y-scroll bg-red-200">

          <Component {...pageProps} />
        </div>

        </NextUIProvider>

</>
  );
}

export default MyApp;
