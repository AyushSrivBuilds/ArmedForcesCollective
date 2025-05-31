"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Added useRouter
import { useSession, signOut } from "next-auth/react"; // Added useSession and signOut
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // Added router instance
  const { data: session, status } = useSession(); // Get session status

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/veterans", label: "Veterans Spotlight" },
    { href: "/resources", label: "Resources" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6" />
          <span className="font-bold text-lg hidden sm:inline-block">
            Armed Forces Collective
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4 md:justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-4 flex items-center gap-2">
            <ModeToggle />
            {status === "loading" ? (
              <Button variant="outline" size="sm" disabled>...</Button>
            ) : session ? (
              <>
                <span className="text-sm hidden sm:inline">Hi, {session.user?.name || session.user?.email?.split('@')[0]}</span>
                <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: '/' })}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="default" size="sm" onClick={() => router.push('/auth/login')}>
                Sign In
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 px-3 rounded-md",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              {status === "loading" ? (
                <Button className="w-full" size="sm" disabled>...</Button>
              ) : session ? (
                <>
                  <p className="px-3 py-2 text-sm text-muted-foreground">Hi, {session.user?.name || session.user?.email?.split('@')[0]}</p>
                  <Button className="w-full" variant="ghost" size="sm" onClick={() => { signOut({ callbackUrl: '/' }); setIsMobileMenuOpen(false); }}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button className="w-full" size="sm" onClick={() => { router.push('/auth/login'); setIsMobileMenuOpen(false); }}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;