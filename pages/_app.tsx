import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomNavbar } from "../components/CustomNavbar";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        <CustomNavbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
