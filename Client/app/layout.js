import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700", "300", "500"] });

export const metadata = {
  title: "Profiler",
  description: "Create a professional looking profile for free in seconds!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
