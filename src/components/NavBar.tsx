"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RGLogo from "../../public/RGLogo.png";
import { FaGear } from "react-icons/fa6";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent backdrop-blur-xl px-10 py-14 h-24">
      {/* Logo */}
      <Link className="relative w-44 h-44" href="/">
        <Image src={RGLogo} alt="Machine Shop Logo" fill className="object-contain" />
      </Link>

      {/* Center Links */}
      <div className="flex items-center space-x-8 text-xl font-semibold text-white">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="no-underline hover:no-underline focus:no-underline visited:no-underline active:no-underline"
            style={{ textDecoration: "none", color: "#4bb0f8" }} // forcibly remove underline blue --> 4bb0f8
          >
            <div className="flex cursor-pointer flex-col items-center">
              <span
                className="inline-block mt-3"
                style={{ textDecoration: "none", color: "#ffffff" }} // forcibly remove underline & color
              >
                {link.name}
              </span>
              <div
                className="transition-opacity duration-200"
                style={{
                  height: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaGear
                  size={12}
                  className={currentPath === link.href ? "opacity-100" : "opacity-0"}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Request a Quote button */}
      <Link
        href="/request-quote"
        className="rounded-md bg-[#4bb0f8] px-4 py-2 text-white text-xl font-semibold hover:bg-[#3aa0e0] transition-colors duration-200 no-underline"
        style={{ textDecoration: "none" }}
      >
        Request a Quote
      </Link>
    </div>
  );
};

export default NavBar;
