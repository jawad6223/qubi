"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { US, PK } from "country-flag-icons/react/3x2";
import { rootImages } from "@/lib/assets/images";
import Icons from "@/lib/assets/icons";
import { styles, combine } from "@/styles/style";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1E274F] from-0% via-[#1E274F] via-85% to-[#171F3D] relative overflow-hidden">
      <div className={`relative z-10 pt-16 pb-7 ${styles.sectionPadding}`}>
        {/* Logo and Email Subscribe */}
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-6 mb-12">
          <Image
            src={rootImages.logo2}
            alt="Qubitars Technologies Logo"
            width={200}
            height={50}
            className="w-auto h-10 md:h-12 lg:h-14 xl:h-16"
            unoptimized
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h6 className="text-white font-semibold mb-2">Texas, USA</h6>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Qubitars Technologies,<br />
                    Mumtaz Market, Gujranwala, Pakistan
                  </p>
                </div>
                <a href="tel:+12094797184" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm">
                  <US className="w-5 h-4 object-contain" />
                  +1 209 479 7184
                </a>
              </div>
              
              <div>
                <h6 className="text-white font-semibold mb-2">Gujranwala, Pakistan</h6>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Qubitars Technologies,<br />
                    Mumtaz Market, Gujranwala, Pakistan
                  </p>
                </div>
                <a href="tel:+923026469153" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm">
                  <PK className="w-5 h-4 object-contain" />
                  +92 302 6469 153
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Follow Us</h3>
            <div className={combine(styles.flexitems, "gap-4")}>
              <Link
                href="https://www.linkedin.com/company/qubitars"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110"
              >
                <Icons.Linkedin className="w-6 h-6 text-white/40 hover:text-accent" />
              </Link>
              <Link
                href="https://www.facebook.com/qubitars"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110"
              >
                <Icons.Facebook className="w-6 h-6 text-white/40 hover:text-accent" />
              </Link>
              <Link
                href="https://www.instagram.com/qubitars"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110"
              >
                <Icons.Instagram className="w-6 h-6 text-white/40 hover:text-accent" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm text-center md:text-left">
              <p>© 2024 Qubitars Technologies. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/50">|</span>
              <Link href="/terms-conditions" className="text-white/50 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
