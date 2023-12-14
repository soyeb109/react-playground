import Image from "next/image";
import { Test } from "../components/Test";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Test />
    </main>
  );
}
