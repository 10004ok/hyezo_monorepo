import { type Metadata } from "next";
import { NavBar } from "~/components/client";
import Providers from "~/lib/contexts";
import "~/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Hello, keyboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#041044" />
      </head>
      <body
        className={`bg-mix ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <section className="flex flex-col">
          <Providers>
            <NavBar className="flex h-[10vh] min-w-full flex-row items-center border-b border-gray-900" />
            <main className="grid w-full lg:grid-cols-3">{children}</main>
          </Providers>
        </section>
      </body>
    </html>
  );
}
