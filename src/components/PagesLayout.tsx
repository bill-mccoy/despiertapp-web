import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}