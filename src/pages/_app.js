import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPage(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {isLoading || !showPage ? (
        <Preloader />
      ) : (
        <>
          <Component {...pageProps} />
          <Contact />
        </>
      )}
    </ThemeProvider>
  );
}
