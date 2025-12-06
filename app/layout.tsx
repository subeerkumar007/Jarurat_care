import "./globals.css";

export const metadata = {
  title: "Cancer Awareness & Support",
  description: "Support, resources and awareness for people affected by cancer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
