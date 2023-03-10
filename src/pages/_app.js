import { Provider } from "react-redux";
import Footer from "@/components/layout/footer";
import store from "@/redux/store";
import "@/styles/globals.css";
import AuthContainer from "@/components/layout/auth";
import dynamic from "next/dynamic";
import { useState } from "react";

const MyComponent = dynamic(() => import("@/components/layout/header"), {
  ssr: false,
});
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyComponent />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}
