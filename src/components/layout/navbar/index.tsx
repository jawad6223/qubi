"use client";
import Image from "next/image";
import Link from "next/link";
import { navbarImages } from "@/lib/assets/images";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import TopNav from "@/components/layout/topNav";
import { styles, combine } from "@/styles/style";
import Icons from "@/lib/assets/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <TopNav />
      
      {/* Main header */}
      <div className="mx-4 lg:mx-7 xl:mx-16">
        <div className={combine(styles.flexBetween, "py-3 md:py-2")}>
          {/* Logo */}
          <Link href="/about" onClick={closeMenu}>
            <Image
              src={navbarImages.logoSvg}
              alt="Qubitars Technology Logo"
              width={450}
              height={120}
              sizes="(max-width: 768px) 240px, 300px"
              className="cursor-pointer w-[135px] md:w-[125px] h-[36px] md:h-[36px] lg:h-[40px] xl:h-[44px] lg:w-[135px] xl:w-[160px]"
              priority
            />
          </Link>

          <div className={combine(styles.flexitems, "gap-4")}>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                className="text-blackish hover:text-accent transition-colors text-base font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center text-blackish hover:text-accent transition-colors duration-200"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-y-auto bg-white">
          {/* Mobile header */}
          <div className={combine(styles.flexBetween, "px-4 py-4 border-b")}>
            <Link href="/about" onClick={closeMenu}>
              <Image
                src={navbarImages.logoSvg}
                alt="Qubitars Technology Logo"
                width={150}
                height={35}
                className="cursor-pointer"
                priority
                sizes="170px"
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="rounded-full p-2 text-blackish hover:text-accent transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile nav items */}
          <nav className="px-4 py-6 space-y-4">
            <Link
              href="/about"
              onClick={closeMenu}
              className="block text-xl font-medium text-blackish hover:text-accent transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block px-6 py-3 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
            >
              Contact Us
            </Link>
            
            {/* Social links */}
            <div className={combine(styles.flexCenter, "mt-8 gap-4 pt-6 border-t")}>
              <Link
                href="https://www.linkedin.com/company/qubitars"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-accent hover:text-accent transition-colors"
              >
                <Icons.Linkedin width={20} height={20} />
              </Link>
              <Link
                href="https://www.facebook.com/qubitars"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-accent hover:text-accent transition-colors"
              >
                <Icons.Facebook width={20} height={20} />
              </Link>
              <Link
                href="https://www.instagram.com/qubitars"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-accent hover:text-accent transition-colors"
              >
                <Icons.Instagram width={20} height={20} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </main>
  );
};

export default Navbar;
