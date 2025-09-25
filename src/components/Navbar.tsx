"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <nav
        className={`fixed top-0 left-0 z-50  w-full px-8 transition-all duration-300 rounded-b-lg
        ${
          scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
        }`}>
        <div className="w-full md:flex md:items-center md:gap-2 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link text-base-content  link-neutral text-xl font-bold no-underline"
                href="#">
                Senja
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#default-navbar-collapse"
                  aria-controls="default-navbar-collapse"
                  aria-label="Toggle navigation">
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
          </div>

          <div
            id="default-navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full">
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">Produk</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer biar konten ga ketutup navbar */}
      <div className="h-16"></div>
    </div>
  );
}
