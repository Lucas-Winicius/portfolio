import Image from "next/image";
import Link from "next/link";
import "@/styles/Header.css";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-7">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={120} height={35.3} />
      </Link>

      <ul className="flex space-x-7 items-center">
        <li>
          <Link className="navLink pb-1 font-medium" href="/">
            Início
          </Link>
        </li>
        <li>
          <Link className="navLink pb-1 font-medium text-with-line" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="navLink pb-1 font-medium" href="/projects">
            Projetos
          </Link>
        </li>
        <li>
          <Link className="navLink pb-1 font-medium" href="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </header>
  );
}
