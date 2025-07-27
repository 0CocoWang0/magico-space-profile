import DocsLayout from "./components/sections/notion/DocsLayout";

//import PfpWrapper from "./components/shared/PfpWrapper";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function Home() {
  return <DocsLayout />;
}
