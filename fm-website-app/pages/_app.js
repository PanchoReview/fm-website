import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import functionalMovementThemes from "../utils/fm-themes";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <NextThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: functionalMovementThemes.lightTheme,
        dark: functionalMovementThemes.darkTheme,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemeProvider>
  );
}

export default MyApp;
