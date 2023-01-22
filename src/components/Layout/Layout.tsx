import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Roboto_Slab, Poppins, Merriweather } from "@next/font/google";
import clsx from "clsx";

type LayoutProps = {
  children: ReactNode;
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "optional"
});

const merriWeather = Merriweather({
  weight: "400",
  variable: "--font-merriWeather",
  display: "optional",
});

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="py-6 w-[90%] lg:w-[80%] m-auto">
      <Navbar />
      <main className={clsx(merriWeather.variable, poppins.variable, "font-poppins")}>
        {children}
      </main>
    </div>
  );
};
