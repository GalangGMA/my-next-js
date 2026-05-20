import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vela Admin",
  description: "Modern admin dashboard template built from screenshot references.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`
            (() => {
              const shouldRemove = (name) =>
                name === 'bis_skin_checked' ||
                name === 'bis_register' ||
                name.startsWith('__processed_');

              const stripAttrs = () => {
                const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT);
                let node = walker.currentNode;

                while (node) {
                  const attrNames = node.getAttributeNames ? node.getAttributeNames() : [];

                  for (const name of attrNames) {
                    if (shouldRemove(name)) {
                      node.removeAttribute(name);
                    }
                  }

                  node = walker.nextNode();
                }
              };

              stripAttrs();

              const observer = new MutationObserver(() => {
                stripAttrs();
              });

              observer.observe(document.documentElement, {
                subtree: true,
                childList: true,
                attributes: true,
              });

              window.addEventListener('load', () => {
                observer.disconnect();
              }, { once: true });
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
