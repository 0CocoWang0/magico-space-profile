import DocsLayout from "./components/shared/DocsLayout";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function Home() {
  return <DocsLayout />;
}
