import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="flex h-[calc(100vh-67px)] flex-row max-w-screen-2xl">
        {children}
      </div>
    </div>
  );
}
