import "./globals.css";

export const metadata = {
  title: "RevRec360",
  description: "Revenue Recognition for your growing SaaS Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
