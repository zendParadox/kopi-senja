import "./globals.css";

import FlyonuiScript from "../components/FlyonuiScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex pt-15 justify-center bg-base-200">
        <div className="p-6">{children}</div>
      </body>
      <FlyonuiScript />
    </html>
  );
}
