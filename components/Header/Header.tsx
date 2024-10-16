"use client";

import Link from "next/link";
import { Menu, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
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
              <p>4364 W 130TH ST, CLEVELAND, OH 44135</p>
            </div>
          </div>
          <div>
            <Link className="text-primary font-bold" href="tel:+12163041233">
              +1 (216) 304 1233
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
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:text-primary-foreground hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary-foreground hover:underline"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-primary-foreground hover:underline"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary-foreground hover:underline"
            >
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
                  <Link
                    href="/"
                    className="hover:text-primary-foreground hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-primary-foreground hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="hover:text-primary-foreground hover:underline"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-primary-foreground hover:underline"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
