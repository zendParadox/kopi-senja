import "./globals.css";
import Script from "next/script";
import FlyonuiScript from "../components/FlyonuiScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="">{children}</div>
        <Script
          src={"../../node_modules/flyonui/flyonui.js"}
          strategy="lazyOnload" // Waits until the browser is idle to run
        />
      </body>
      <FlyonuiScript />
    </html>
  );
}
