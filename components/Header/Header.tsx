"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Clock, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkStyles = (path: string) =>
    `transition-colors duration-200 ${
      pathname === path ? "text-orange-500" : "hover:text-orange-500"
    }`;

  return (
    <header className="bg-secondary text-secondary-foreground shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between py-2 text-xs">
          <div className="font-bold">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              <p>EVERYDAY 9:00A - 5:00P</p>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              <p>19100 Nottingham Road Cleveland OH 44110</p>
            </div>
          </div>
          <div>
            <Link className="text-primary font-bold" href="tel:+12163041233">
              <Button className="w-full px-4 py-4 text-white">
                  Call/Text 216-304-1233
              </Button>
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary">KARS</span> AUTO SALES AND REPAIR LLC
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            <Link href="/" className={navLinkStyles("/")}>
              Home
            </Link>
            <Link href="/inventory" className={navLinkStyles("/inventory")}>
              Inventory
            </Link>
            {/* Auto Repair Dropdown - Moved here */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 ${navLinkStyles("/auto-repair")} ${pathname.startsWith("/auto-repair") ? "text-orange-500" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
              >
                Auto Repair <ChevronDown className="h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 transition-all duration-200 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible`}>
                <Link href="/auto-repair" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-500">
                  Auto Repair Services
                </Link>
                <Link href="/auto-repair/services" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-500">
                  Service Details
                </Link>
                <Link href="/auto-repair/booking" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-500">
                  Book Appointment
                </Link>
                <Link href="/fleet-maintenance" className="block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-500">
                  Fleet Maintenance
                </Link>
              </div>
            </div>
            <Link href="/about" className={navLinkStyles("/about")}>
              About
            </Link>
            {/* <Link href="/services" className={navLinkStyles("/services")}>
              Services
            </Link> */}
            <Link href="/contact" className={navLinkStyles("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-secondary text-secondary-foreground">
                {/* Mobile menu items */}
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className={navLinkStyles("/")}>
                    Home
                  </Link>
                  <Link href="/inventory" className={navLinkStyles("/inventory")}>
                    Inventory
                  </Link>
                  <Link href="/about" className={navLinkStyles("/about")}>
                    About
                  </Link>
                  <Link href="/services" className={navLinkStyles("/services")}>
                    Services
                  </Link>
                  <Link href="/contact" className={navLinkStyles("/contact")}>
                    Contact
                  </Link>
                  
                  {/* Auto Repair Section */}
                  <div className="border-t pt-2">
                    <p className="font-medium mb-2">Auto Repair:</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/auto-repair" className={navLinkStyles("/auto-repair")}>
                        Auto Repair Services
                      </Link>
                      <Link href="/auto-repair/services" className={navLinkStyles("/auto-repair/services")}>
                        Service Details
                      </Link>
                      <Link href="/auto-repair/booking" className={navLinkStyles("/auto-repair/booking")}>
                        Book Appointment
                      </Link>
                      <Link href="/fleet-maintenance" className={navLinkStyles("/fleet-maintenance")}>
                        Fleet Maintenance
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
