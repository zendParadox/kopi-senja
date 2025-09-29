"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 z-50 w-full px-8 transition-all duration-300 rounded-b-lg
        ${
          scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
        }`}>
        <div className="w-full md:flex md:items-center md:gap-2 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full flex gap-3">
              {/* Brand Logo pakai Link */}
              <Link
                href="/"
                className="inline-flex items-center w-fit justify-start no-underline"
                aria-label="Beranda Senja">
                <Image
                  src="/images/logo-only.png"
                  alt="Senja"
                  className={`object-contain transition-all md:w-40  duration-300 
                    ${scrolled ? "h-10" : "h-10"}`}
                  width={40}
                  height={40}
                />
                {/* <img
                  src="/logo.png"
                  alt="Senja"
                  className={`object-contain transition-all duration-300
                    ${scrolled ? "h-8" : "h-10"}`}
                  width={160}
                  height={40}
                /> */}
              </Link>

              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#default-navbar-collapse"
                  aria-controls="default-navbar-collapse"
                  aria-label="Toggle navigation">
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4" />
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4" />
                </button>
              </div>
            </div>
          </div>

          <div
            id="default-navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full">
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#">Produk</Link>
              </li>
              <li>
                <Link href="#">Kontak</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer biar konten ga ketutup navbar */}
      <div className="h-16" />
    </div>
  );
}
