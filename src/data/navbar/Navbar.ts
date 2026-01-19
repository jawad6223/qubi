// Simplified navbar data - minimal for about page only
import Icons from "@/lib/assets/icons";
import { Linkedin, Facebook, Instagram } from "lucide-react";

// Social links for mobile menu
export const socialLinks = [
  { 
    id: "linkedin", 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/qubitars" 
  },
  { 
    id: "facebook", 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/qubitars" 
  },
  { 
    id: "instagram", 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/qubitars" 
  },
  { 
    id: "whatsapp", 
    name: "WhatsApp", 
    icon: Icons.Whatsapp, 
    href: "https://wa.me/923026469153" 
  },
];

// Empty exports for backward compatibility
export const capabilitiesData: any[] = [];
export const additionalServices: any[] = [];
export const industries: any[] = [];
export const companyData: any[] = [];
export const engagementData: any[] = [];
export const navItems: any[] = [];
