import type { Metadata } from "next";
import "./globals.css";

import { HomeLayout as _HomeLayout } from "@/modules/common/home-layout";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "LICS",
  description: "LICS of Korea University",
  openGraph: {
    title: "LICS",
    description: "LICS of Korea University",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={``}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <_HomeLayout>
            {modal}
            {children}
          </_HomeLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
