import Link from "next/link";
import ThemeButton from "./ThemeButton";

export const Navbar = () => {
  return (
    <div className="mb-5 container flex items-center justify-between">
      <Link href="/">Home</Link>
      <ThemeButton />
    </div>
  );
};
